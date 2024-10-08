package com.nsp.backend.model;

public class InstituteCasteStudent {
	private String fullName;
    private String email;

    public InstituteCasteStudent(String fullName, String email) {
        this.fullName = fullName;
        this.email = email;
    }

    // Getters and setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
