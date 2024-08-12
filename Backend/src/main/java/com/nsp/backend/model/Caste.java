package com.nsp.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "caste_info")
public class Caste {
    @Id
    private String email;
    private String nationality;
    private String specialChild;
    private int ninthMarks;
    private byte[] encryptedNinthMarksheet;
    private int tenthMarks;
    private byte[] encryptedTenthMarksheet;
    private String caste;
    private int familyIncome;
    private byte[] encryptedAESKey;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getSpecialChild() {
		return specialChild;
	}
	public void setSpecialChild(String specialChild) {
		this.specialChild = specialChild;
	}
	public int getNinthMarks() {
		return ninthMarks;
	}
	public void setNinthMarks(int ninthMarks) {
		this.ninthMarks = ninthMarks;
	}
	public byte[] getEncryptedNinthMarksheet() {
		return encryptedNinthMarksheet;
	}
	public void setEncryptedNinthMarksheet(byte[] encryptedNinthMarksheet) {
		this.encryptedNinthMarksheet = encryptedNinthMarksheet;
	}
	public int getTenthMarks() {
		return tenthMarks;
	}
	public void setTenthMarks(int tenthMarks) {
		this.tenthMarks = tenthMarks;
	}
	public byte[] getEncryptedTenthMarksheet() {
		return encryptedTenthMarksheet;
	}
	public void setEncryptedTenthMarksheet(byte[] encryptedTenthMarksheet) {
		this.encryptedTenthMarksheet = encryptedTenthMarksheet;
	}
	public String getCaste() {
		return caste;
	}
	public void setCaste(String caste) {
		this.caste = caste;
	}
	public int getFamilyIncome() {
		return familyIncome;
	}
	public void setFamilyIncome(int familyIncome) {
		this.familyIncome = familyIncome;
	}
	public byte[] getEncryptedAESKey() {
		return encryptedAESKey;
	}
	public void setEncryptedAESKey(byte[] encryptedAESKey) {
		this.encryptedAESKey = encryptedAESKey;
	}
    
    
}
