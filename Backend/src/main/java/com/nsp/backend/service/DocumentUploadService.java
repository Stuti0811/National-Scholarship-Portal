package com.nsp.backend.service;

import java.security.KeyPair;
import java.util.List;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nsp.backend.Repository.DocumentUploadRepository;
import com.nsp.backend.model.DocumentUpload;
import com.nsp.backend.util.EncryptionUtil;

@Service
public class DocumentUploadService {

    @Autowired
    private DocumentUploadRepository drepo;

    public DocumentUpload save(byte[] aadharCard, byte[] panCard, byte[] domicile, byte[] casteCertificate, byte[] characterCertificate) throws Exception {
    	DocumentUpload dp = new DocumentUpload();
    	
    	// Generate AES Key
        SecretKey aesKey = EncryptionUtil.generateAESKey();
        
        byte[] encryptedAadharCard = EncryptionUtil.encryptDataWithAES(aadharCard, aesKey);
        byte[] encryptedPanCard = EncryptionUtil.encryptDataWithAES(panCard, aesKey);
        byte[] encryptedDomicile = EncryptionUtil.encryptDataWithAES(domicile, aesKey);
        byte[] encryptedCasteCertificate = EncryptionUtil.encryptDataWithAES(casteCertificate, aesKey);
        byte[] encryptedCharacterCertificate = EncryptionUtil.encryptDataWithAES(characterCertificate, aesKey);
        
     // Generate RSA Key Pair (or you could use a static public/private key pair)
        KeyPair rsaKeyPair = EncryptionUtil.generateRSAKeyPair();
        
     // Encrypt AES Key with RSA Public Key
        byte[] encryptedAESKey = EncryptionUtil.encryptAESKeyWithRSA(aesKey, rsaKeyPair.getPublic());

        dp.setEncryptedAadharCard(encryptedAadharCard);
        dp.setEncryptedPanCard(encryptedPanCard);
        dp.setEncryptedDomicile(encryptedDomicile);
        dp.setEncryptedCasteCertificate(encryptedCasteCertificate);
        dp.setEncryptedCharacterCertificate(encryptedCharacterCertificate);
        dp.setEncryptedAESKey(encryptedAESKey);
        
    	return drepo.save(dp);
    }
    public List<DocumentUpload> getAll() {
        return drepo.findAll();
    }
}