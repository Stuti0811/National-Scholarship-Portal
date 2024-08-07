package com.nsp.backend.model;

import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.util.Base64;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Document(collection = "Students")
public class Student {

	
	public String fName;
	public String lName;
	
	@Email
	@NotBlank
	public String email;
	public String password;
	public String cpassword;
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		Base64.Encoder encoder = Base64.getEncoder();  
        String normalString = password;
        String encodedString = encoder.encodeToString(   // encrypt password in database field
         normalString.getBytes(StandardCharsets.UTF_8) );
        this.password = encodedString;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		Base64.Encoder encoder = Base64.getEncoder();  
        String normalString = cpassword;
        String encodedString = encoder.encodeToString(   // encrypt password in database field
         normalString.getBytes(StandardCharsets.UTF_8) );
        this.password = encodedString;
	}
	public Student(String fName, String lName, @Email @NotBlank String email, String password,
			String cpassword) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.email = email;
		this.password = password;
		this.cpassword = cpassword;
	}
	public Student() {
		super();
	}
	
		
		
		
	   
	}


	

