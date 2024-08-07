package com.nsp.backend.util;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class EncryptionUtil {

    static {
        Security.addProvider(new BouncyCastleProvider());
    }

    // Generate AES Key
    public static SecretKey generateAESKey() throws NoSuchAlgorithmException {
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(256);
        return keyGen.generateKey();
    }

    // Encrypt file data with AES Key
    public static byte[] encryptDataWithAES(byte[] data, SecretKey secretKey) throws Exception {
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        return cipher.doFinal(data);
    }

    // Generate RSA Key Pair
    public static KeyPair generateRSAKeyPair() throws NoSuchAlgorithmException {
        KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance("RSA");
        keyPairGen.initialize(2048);
        return keyPairGen.generateKeyPair();
    }

    // Encrypt AES Key with RSA Public Key
    public static byte[] encryptAESKeyWithRSA(SecretKey secretKey, PublicKey publicKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.WRAP_MODE, publicKey);
        return cipher.wrap(secretKey);
    }
    
    
    // Decrypt AES Key with RSA Private Key
    public static SecretKey decryptAESKeyWithRSA(byte[] encryptedAESKey, PrivateKey privateKey) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.UNWRAP_MODE, privateKey);
        return (SecretKey) cipher.unwrap(encryptedAESKey, "AES", Cipher.SECRET_KEY);
    }

    // Decrypt file data with AES Key
    public static byte[] decryptDataWithAES(byte[] encryptedData, SecretKey secretKey) throws Exception {
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        return cipher.doFinal(encryptedData);
    }
    
      
// Convert Private Key to Base64 String
//    public static String convertPrivateKeyToBase64(PrivateKey privateKey) {
//        return Base64.getEncoder().encodeToString(privateKey.getEncoded());
//    }
//
//    // Convert Base64 String to Private Key
//    public static PrivateKey convertBase64ToPrivateKey(String base64PrivateKey) throws Exception {
//        byte[] keyBytes = Base64.getDecoder().decode(base64PrivateKey);
//        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);
//        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
//        return keyFactory.generatePrivate(keySpec);
//    }
}
