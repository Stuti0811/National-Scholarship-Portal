package com.nsp.backend.model;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "documents")
public class DocumentUpload {
	private byte[] encryptedAadharCard;
	private byte[] encryptedPanCard;
	private byte[] encryptedDomicile;
	private byte[] encryptedCasteCertificate;
	private byte[] encryptedCharacterCertificate;
	private byte[] encryptedAESKey;
	

	public byte[] getEncryptedAadharCard() {
		return encryptedAadharCard;
	}
	public void setEncryptedAadharCard(byte[] encryptedAadharCard) {
		this.encryptedAadharCard = encryptedAadharCard;
	}
	public byte[] getEncryptedPanCard() {
		return encryptedPanCard;
	}
	public void setEncryptedPanCard(byte[] encryptedPanCard) {
		this.encryptedPanCard = encryptedPanCard;
	}
	public byte[] getEncryptedDomicile() {
		return encryptedDomicile;
	}
	public void setEncryptedDomicile(byte[] encryptedDomicile) {
		this.encryptedDomicile = encryptedDomicile;
	}
	public byte[] getEncryptedCasteCertificate() {
		return encryptedCasteCertificate;
	}
	public void setEncryptedCasteCertificate(byte[] encryptedCasteCertificate) {
		this.encryptedCasteCertificate = encryptedCasteCertificate;
	}
	public byte[] getEncryptedCharacterCertificate() {
		return encryptedCharacterCertificate;
	}
	public void setEncryptedCharacterCertificate(byte[] encryptedCharacterCertificate) {
		this.encryptedCharacterCertificate = encryptedCharacterCertificate;
	}
	public byte[] getEncryptedAESKey() {
		return encryptedAESKey;
	}
	public void setEncryptedAESKey(byte[] encryptedAESKey) {
		this.encryptedAESKey = encryptedAESKey;
	}
	
	
}