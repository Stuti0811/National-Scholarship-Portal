package com.nsp.backend.model;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


@Document(collection = "Government")
public class Government {


		@Email
		@NotBlank
		public String email;
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


		public String password;
		
		
		public Government() {
			super();
		}


		public Government(@Email @NotBlank String email, String password) {
			super();
			this.email = email;
			this.password = password;
		}

}
