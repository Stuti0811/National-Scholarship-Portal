package com.nsp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.backend.Exception.ResourceNotFoundException;
import com.nsp.backend.Repository.CombinedFormRepository;
import com.nsp.backend.Repository.NtseFormRepository;
import com.nsp.backend.model.CombinedForm;
import com.nsp.backend.model.NtseDetails;
import com.nsp.backend.model.NtseForm;

@Service
public class NtseDetailsService {
	 @Autowired
	    private CombinedFormRepository combinedFormRepository;
	    @Autowired
	    private NtseFormRepository ntseFormRepository;

	    public NtseDetails getStudentByEmail(String email) throws ResourceNotFoundException {
	    	NtseForm ntseForm = ntseFormRepository.findByEmail(email);
	        CombinedForm combinedForm = combinedFormRepository.findByEmail(email);
	        
	        if (ntseForm == null || combinedForm == null) {
	            throw new ResourceNotFoundException("Student not found with email: " + email);
	        }

	        // Map data to DTO
	        NtseDetails dto = new NtseDetails();
	        dto.setFirstName(combinedForm.getFirstName());
	        dto.setMiddleName(combinedForm.getMiddleName());
	        dto.setLastName(combinedForm.getLastName());
	        dto.setDob(combinedForm.getDob());
	        dto.setEmail(combinedForm.getEmail());
	        dto.setPhone(combinedForm.getPhone());
	        dto.setCity(combinedForm.getCity());
	        dto.setState(combinedForm.getState());
	        dto.setPincode(combinedForm.getPincode());
	        dto.setPermanentAddress(combinedForm.getPermanentAddress());
	        dto.setCurrentAddress(combinedForm.getCurrentAddress());
	        dto.setEncryptedAadharCard(combinedForm.getEncryptedAadharCard());
	        dto.setEncryptedPanCard(combinedForm.getEncryptedPanCard());
	        dto.setEncryptedDomicile(combinedForm.getEncryptedDomicile());
	        dto.setEncryptedCasteCertificate(combinedForm.getEncryptedCasteCertificate());
	        dto.setEncryptedCharacterCertificate(combinedForm.getEncryptedCharacterCertificate());
	        
	        dto.setNationality(ntseForm.getNationality());
	        dto.setSpecialChild(ntseForm.getSpecialChild());
	        dto.setMarks(ntseForm.getMarks());
	        dto.setEncryptedMarksheet(ntseForm.getEncryptedMarksheet());
	        
	        
	        return dto;
	    }
}
