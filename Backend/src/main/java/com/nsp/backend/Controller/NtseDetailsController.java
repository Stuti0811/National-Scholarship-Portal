package com.nsp.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nsp.backend.Exception.ResourceNotFoundException;
import com.nsp.backend.model.NtseDetails;
import com.nsp.backend.service.NtseDetailsService;

@RestController
@RequestMapping("/api/ntsestudentslist")
@CrossOrigin(origins="http://localhost:3000")
public class NtseDetailsController {
	@Autowired
    private NtseDetailsService ndService;

    @GetMapping("/get/{email}")
    public NtseDetails getStudentByEmail(@PathVariable String email) throws ResourceNotFoundException {
        return ndService.getStudentByEmail(email);
    }
}
