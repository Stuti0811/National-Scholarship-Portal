package com.nsp.backend.service;

import java.io.IOException;
import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nsp.backend.Repository.CombinedFormRepository;
import com.nsp.backend.model.CombinedForm;

@Service
public class CombinedFormService {
	 @Autowired
	    private CombinedFormRepository combinedFormRepository;

	    public void saveForm(String firstName, String middleName, String lastName, Date dob, String email, long phone, String city, String state, long pincode, String permanentAddress, String currentAddress, MultipartFile aadharCard, MultipartFile panCard, MultipartFile domicile, MultipartFile casteCertificate, MultipartFile characterCertificate) throws IOException {
	        
	        CombinedForm combinedForm = new CombinedForm();
	        combinedForm.setFirstName(firstName);
	        combinedForm.setMiddleName(middleName);
	        combinedForm.setLastName(lastName);
	        combinedForm.setDob(dob);
	        combinedForm.setEmail(email);
	        combinedForm.setPhone(phone);
	        combinedForm.setCity(city);
	        combinedForm.setState(state);
	        combinedForm.setPincode(pincode);
	        combinedForm.setPermanentAddress(permanentAddress);
	        combinedForm.setCurrentAddress(currentAddress);
	        combinedForm.setAadharCard(aadharCard.getBytes());
	        combinedForm.setPanCard(panCard.getBytes());
	        combinedForm.setDomicile(domicile.getBytes());
	        combinedForm.setCasteCertificate(casteCertificate.getBytes());
	        combinedForm.setCharacterCertificate(characterCertificate.getBytes());

	        combinedFormRepository.save(combinedForm);
	    }
}
