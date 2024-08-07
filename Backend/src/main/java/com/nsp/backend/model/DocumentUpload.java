package com.nsp.backend.model;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "documents")
public class DocumentUpload {
	private byte[] tenthMarksheet;
	private byte[] aadharCard;
	private byte[] panCard;
	private byte[] domicile;
	private byte[] casteCertificate;
	private byte[] characterCertificate;
	
	public byte[] getTenthMarksheet() {
		return tenthMarksheet;
	}
	public void setTenthMarksheet(byte[] tenthMarksheet) {
		this.tenthMarksheet = tenthMarksheet;
	}
	public byte[] getAadharCard() {
		return aadharCard;
	}
	public void setAadharCard(byte[] aadharCard) {
		this.aadharCard = aadharCard;
	}
	public byte[] getPanCard() {
		return panCard;
	}
	public void setPanCard(byte[] panCard) {
		this.panCard = panCard;
	}
	public byte[] getDomicile() {
		return domicile;
	}
	public void setDomicile(byte[] domicile) {
		this.domicile = domicile;
	}
	public byte[] getCasteCertificate() {
		return casteCertificate;
	}
	public void setCasteCertificate(byte[] casteCertificate) {
		this.casteCertificate = casteCertificate;
	}
	public byte[] getCharacterCertificate() {
		return characterCertificate;
	}
	public void setCharacterCertificate(byte[] characterCertificate) {
		this.characterCertificate = characterCertificate;
	}
	
}