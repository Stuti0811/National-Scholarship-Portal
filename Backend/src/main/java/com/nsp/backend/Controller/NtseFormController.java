package com.nsp.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nsp.backend.model.NtseForm;
import com.nsp.backend.service.NtseFormService;

@RestController
@RequestMapping("/api/ntse")
@CrossOrigin(origins="http://localhost:3000")
public class NtseFormController {
	@Autowired
	private NtseFormService nservice;
	
	@PostMapping("/save")
	public String saveForm(@RequestParam("email") String email,
			@RequestParam("nationality") String nationality,
			@RequestParam("specialChild") String specialChild, 
			@RequestParam("marks") String marks,
			@RequestParam(value = "marksheet", required = true) MultipartFile marksheet
			){
		try {
			NtseForm ntse = new NtseForm();
			ntse.setEmail(email);
			ntse.setNationality(nationality);
			ntse.setSpecialChild(specialChild);
			ntse.setMarks(marks);
			
			nservice.save(ntse, marksheet.getBytes());
			
			System.out.println("Done");
            return "Caste information saved successfully.";
		}
		catch(Exception e) {
			e.printStackTrace();
            return "Failed to save caste information.";
		}
	}
}
