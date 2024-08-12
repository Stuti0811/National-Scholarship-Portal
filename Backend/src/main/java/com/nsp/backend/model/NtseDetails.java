package com.nsp.backend.model;

import java.util.Date;

public class NtseDetails {
	// PersonalInfo fields
	private String firstName;
    private String middleName;
    private String lastName;
    private Date dob;
    private String email;
    private long phone;
    private String city;
    private String state;
    private long pincode;
    private String permanentAddress;
    private String currentAddress;

    // DocumentUpload fields
    private byte[] encryptedAadharCard;
    private byte[] encryptedPanCard;
    private byte[] encryptedDomicile;
    private byte[] encryptedCasteCertificate;
    private byte[] encryptedCharacterCertificate;
    
    //NtseForm fields
    private String nationality;
    private String specialChild;
    private String marks;
    private byte[] encryptedMarksheet;
    
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public long getPincode() {
		return pincode;
	}
	public void setPincode(long pincode) {
		this.pincode = pincode;
	}
	public String getPermanentAddress() {
		return permanentAddress;
	}
	public void setPermanentAddress(String permanentAddress) {
		this.permanentAddress = permanentAddress;
	}
	public String getCurrentAddress() {
		return currentAddress;
	}
	public void setCurrentAddress(String currentAddress) {
		this.currentAddress = currentAddress;
	}
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
	
    
}
