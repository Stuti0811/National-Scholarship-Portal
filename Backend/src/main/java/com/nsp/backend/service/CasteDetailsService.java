package com.nsp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.backend.Exception.ResourceNotFoundException;
import com.nsp.backend.Repository.CasteRepository;
import com.nsp.backend.Repository.CombinedFormRepository;
import com.nsp.backend.model.Caste;
import com.nsp.backend.model.CasteDetails;
import com.nsp.backend.model.CombinedForm;

@Service
public class CasteDetailsService {
	@Autowired
    private CombinedFormRepository combinedFormRepository;
	@Autowired 
	private CasteRepository casteRepository;
	
	public CasteDetails getStudentByEmail(String email) throws ResourceNotFoundException {
    	Caste caste = casteRepository.findByEmail(email);
        CombinedForm combinedForm = combinedFormRepository.findByEmail(email);
        
        if (caste == null || combinedForm == null) {
            throw new ResourceNotFoundException("Student not found with email: " + email);
        }

        // Map data to DTO
        CasteDetails dto = new CasteDetails();
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
        
        dto.setNationality(caste.getNationality());
        dto.setSpecialChild(caste.getSpecialChild());
        dto.setNinthMarks(caste.getNinthMarks());
        dto.setEncryptedNinthMarksheet(caste.getEncryptedNinthMarksheet());
        dto.setTenthMarks(caste.getTenthMarks());
        dto.setEncryptedTenthMarksheet(caste.getEncryptedTenthMarksheet());
        dto.setCaste(caste.getCaste());
        dto.setFamilyIncome(caste.getFamilyIncome());
   
        return dto;
    }
}
