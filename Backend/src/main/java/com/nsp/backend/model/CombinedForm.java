package com.nsp.backend.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Document(collection = "CombinedForm")
public class CombinedForm {

    // Personal information fields
    private String firstName;
    private String middleName;
    private String lastName;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dob;
    @Id
    @Email
    @NotBlank
    private String email;
    private long phone;
    private String city;
    private String state;
    private long pincode;
    private String permanentAddress;
    private String currentAddress;

    // Document upload fields
    private byte[] aadharCard;
    private byte[] panCard;
    private byte[] domicile;
    private byte[] casteCertificate;
    private byte[] characterCertificate;

    // Getters and setters
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
