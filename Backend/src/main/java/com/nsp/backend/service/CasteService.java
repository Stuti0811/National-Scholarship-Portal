package com.nsp.backend.service;


import java.security.KeyPair;
import java.security.PrivateKey;

import javax.crypto.SecretKey;

//@Service
//public class CasteService {
//    @Autowired
//    private CasteRepository crepo;
//    
//    public Caste saveForm(Caste form) {
//        return crepo.save(form);
//    }
//
//    public List<Caste> getAll() {
//        return crepo.findAll();
//    }
//    
//    public Optional<Caste> getForm(String email) {
//        return crepo.findById(email);
//    }
//    
//    
//}

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.backend.Repository.CasteRepository;
import com.nsp.backend.model.Caste;
import com.nsp.backend.util.EncryptionUtil;

@Service
public class CasteService {

    @Autowired
    private CasteRepository casteRepository;

    public void saveCasteInfo(Caste caste, byte[] ninthMarksheet, byte[] tenthMarksheet) throws Exception {
        // Generate AES Key
        SecretKey aesKey = EncryptionUtil.generateAESKey();

        // Encrypt files
        byte[] encryptedNinthMarksheet = EncryptionUtil.encryptDataWithAES(ninthMarksheet, aesKey);
        byte[] encryptedTenthMarksheet = EncryptionUtil.encryptDataWithAES(tenthMarksheet, aesKey);

        // Generate RSA Key Pair (or you could use a static public/private key pair)
        KeyPair rsaKeyPair = EncryptionUtil.generateRSAKeyPair();
        
        
        
        
//        String base64PrivateKey = EncryptionUtil.convertPrivateKeyToBase64(rsaKeyPair.getPrivate());
//        
//        // Print the Base64-encoded Private Key
//        System.out.println("Base64 Encoded RSA Private Key:");
//        System.out.println(base64PrivateKey);

        
        
        
        // Encrypt AES Key with RSA Public Key
        byte[] encryptedAESKey = EncryptionUtil.encryptAESKeyWithRSA(aesKey, rsaKeyPair.getPublic());

        // Set encrypted data in the caste object
        caste.setEncryptedNinthMarksheet(encryptedNinthMarksheet);
        caste.setEncryptedTenthMarksheet(encryptedTenthMarksheet);
        caste.setEncryptedAESKey(encryptedAESKey);

        // Save caste info to MongoDB
        casteRepository.save(caste);
    }
    
    
    public Caste decryptCasteInfo(String email, PrivateKey rsaPrivateKey) throws Exception {
        Caste caste = casteRepository.findById(email).orElseThrow(() -> new RuntimeException("Caste info not found"));

        // Decrypt AES Key
        SecretKey aesKey = EncryptionUtil.decryptAESKeyWithRSA(caste.getEncryptedAESKey(), rsaPrivateKey);

        // Decrypt files
        byte[] decryptedNinthMarksheet = EncryptionUtil.decryptDataWithAES(caste.getEncryptedNinthMarksheet(), aesKey);
        byte[] decryptedTenthMarksheet = EncryptionUtil.decryptDataWithAES(caste.getEncryptedTenthMarksheet(), aesKey);

        // Set decrypted data
        caste.setEncryptedNinthMarksheet(decryptedNinthMarksheet);
        caste.setEncryptedTenthMarksheet(decryptedTenthMarksheet);

        return caste;
    }
}
