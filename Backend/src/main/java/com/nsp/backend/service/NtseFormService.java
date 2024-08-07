package com.nsp.backend.service;

import java.security.KeyPair;
import java.util.List;
import java.util.Optional;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.backend.Repository.NtseFormRepository;
import com.nsp.backend.model.NtseForm;
import com.nsp.backend.util.EncryptionUtil;

@Service
public class NtseFormService {
	@Autowired
	private NtseFormRepository nrepo;
	
	public void save(NtseForm s,byte[] marksheet) throws Exception {
		SecretKey aeskey = EncryptionUtil.generateAESKey();
		
		byte[] encryptedMarksheet = EncryptionUtil.encryptDataWithAES(marksheet, aeskey);
		
		KeyPair rsaKeyPair = EncryptionUtil.generateRSAKeyPair();
		
		byte[] encryptedAESKey = EncryptionUtil.encryptAESKeyWithRSA(aeskey, rsaKeyPair.getPublic());
		
		s.setEncryptedMarksheet(encryptedMarksheet);
		s.setEncryptedAESKey(encryptedAESKey);
		
		nrepo.save(s);
	}
	
	public List<NtseForm> getAll() {
        return nrepo.findAll();
    }
    
    public Optional<NtseForm> getForm(String email) {
        return nrepo.findById(email);
    }
}
