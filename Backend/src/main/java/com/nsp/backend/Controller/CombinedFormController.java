package com.nsp.backend.Controller;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nsp.backend.model.CombinedForm;
import com.nsp.backend.service.CombinedFormService;

@RestController
@RequestMapping("/api/combinedforms")
@CrossOrigin(origins = "http://localhost:3000")
public class CombinedFormController {
	 @Autowired
	    private CombinedFormService formService;

	    @PostMapping("/save")
	    public ResponseEntity<String> saveForm(
	            @RequestParam("firstName") String firstName,
	            @RequestParam("middleName") String middleName,
	            @RequestParam("lastName") String lastName,
	            @RequestParam("dob") Date dob,
	            @RequestParam("email") String email,
	            @RequestParam("phone") long phone,
	            @RequestParam("city") String city,
	            @RequestParam("state") String state,
	            @RequestParam("pincode") long pincode,
	            @RequestParam("permanentAddress") String permanentAddress,
	            @RequestParam("currentAddress") String currentAddress,
	            @RequestParam("aadharCard") MultipartFile aadharCard,
	            @RequestParam("panCard") MultipartFile panCard,
	            @RequestParam("domicile") MultipartFile domicile,
	            @RequestParam("casteCertificate") MultipartFile casteCertificate,
	            @RequestParam("characterCertificate") MultipartFile characterCertificate) {

	        try {
	        	CombinedForm cf = new CombinedForm();
	        	cf.setFirstName(firstName);
	        	cf.setLastName(lastName);
	        	cf.setMiddleName(middleName);
	        	cf.setDob(dob);
	        	cf.setEmail(email);
	        	cf.setPhone(phone);
	        	cf.setCity(city);
	        	cf.setState(state);
	        	cf.setPincode(pincode);
	        	cf.setPermanentAddress(permanentAddress);
	        	cf.setCurrentAddress(currentAddress);
	        	
	            formService.saveForm(cf, aadharCard.getBytes(), panCard.getBytes(), domicile.getBytes(), casteCertificate.getBytes(), characterCertificate.getBytes());
	            return ResponseEntity.ok("Data saved successfully.");
	        } catch (Exception e) {
	            e.printStackTrace();
	            return ResponseEntity.status(500).body("Error saving data.");
	        }
	    }
	    
	    
}
