package com.nsp.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nsp.backend.Exception.ResourceNotFoundException;
import com.nsp.backend.model.CasteDetails;
import com.nsp.backend.service.CasteDetailsService;

@RestController
@RequestMapping("/api/castestudentslist")
@CrossOrigin(origins="http://localhost:3000")
public class CasteDetailsController {
	@Autowired
	private CasteDetailsService cdService;
	
	@GetMapping("/get/{email}")
    public CasteDetails getStudentByEmail(@PathVariable String email) throws ResourceNotFoundException {
        return cdService.getStudentByEmail(email);
    }
}
