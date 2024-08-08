package com.nsp.backend.service;

import java.security.KeyPair;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.backend.Repository.CombinedFormRepository;
import com.nsp.backend.model.CombinedForm;
import com.nsp.backend.util.EncryptionUtil;

@Service
public class CombinedFormService {
	 	@Autowired
	    private CombinedFormRepository cfrepo;

	    public void saveForm(CombinedForm combinedForm , byte[] aadharCard, byte[] panCard, byte[] domicile, byte[] casteCertificate, byte[] characterCertificate) throws Exception {
	        
	    	SecretKey aesKey = EncryptionUtil.generateAESKey();
	    	 
	       byte[] encryptedAadharCard = EncryptionUtil.encryptDataWithAES(aadharCard, aesKey);
	       byte[] encryptedPanCard = EncryptionUtil.encryptDataWithAES(panCard, aesKey);
	       byte[] encryptedDomicile = EncryptionUtil.encryptDataWithAES(domicile, aesKey);
	       byte[] encryptedCasteCertificate = EncryptionUtil.encryptDataWithAES(casteCertificate, aesKey);
	       byte[] encryptedCharacterCertificate = EncryptionUtil.encryptDataWithAES(characterCertificate, aesKey);
	       
	       KeyPair rsaKeyPair = EncryptionUtil.generateRSAKeyPair();
	       
	       byte[] encryptedAESKey= EncryptionUtil.encryptAESKeyWithRSA(aesKey, rsaKeyPair.getPublic());

	    		 
	    	
	        combinedForm.setEncryptedAadharCard(encryptedAadharCard);
	        combinedForm.setEncryptedPanCard(encryptedPanCard);
	        combinedForm.setEncryptedDomicile(encryptedDomicile);
	        combinedForm.setEncryptedCasteCertificate(encryptedCasteCertificate);
	        combinedForm.setEncryptedCharacterCertificate(encryptedCharacterCertificate);
	        combinedForm.setEncryptedAESKey(encryptedAESKey);

	        cfrepo.save(combinedForm);
	    }
}
