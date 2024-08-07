package com.nsp.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="ntse_form")
public class NtseForm {
	@Id
    private String email;
    private String nationality;
    private String specialChild;
    private String marks;
    private byte[] encryptedMarksheet;
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
	public String getMarks() {
		return marks;
	}
	public void setMarks(String marks) {
		this.marks = marks;
	}
	public byte[] getEncryptedMarksheet() {
		return encryptedMarksheet;
	}
	public void setEncryptedMarksheet(byte[] encryptedMarksheet) {
		this.encryptedMarksheet = encryptedMarksheet;
	}
	public byte[] getEncryptedAESKey() {
		return encryptedAESKey;
	}
	public void setEncryptedAESKey(byte[] encryptedAESKey) {
		this.encryptedAESKey = encryptedAESKey;
	}
    
    
}
