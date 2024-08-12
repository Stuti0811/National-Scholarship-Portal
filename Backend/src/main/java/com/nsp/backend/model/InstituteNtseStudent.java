package com.nsp.backend.model;

public class InstituteNtseStudent {
    private String fullName;
    private String email;

    public InstituteNtseStudent(String fullName, String email) {
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
