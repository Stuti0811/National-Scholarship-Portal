package com.nsp.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nsp.backend.Exception.ResourceNotFoundException;
import com.nsp.backend.model.Government;
import com.nsp.backend.service.GovernmentService;

@RestController
@RequestMapping(value="/api/government")
@CrossOrigin(origins="http://localhost:3000")
public class GovernmentController {
	
	@Autowired
	public GovernmentService gservice;
	
	 @PostMapping("/login")
		public ResponseEntity<Boolean> loginGovernment(@Validated @RequestBody Government g) throws ResourceNotFoundException
		{
			Boolean isAuthenticated = false;
			String email=g.getEmail();
			String password=g.getPassword();
		
			Government Government = gservice.loginGovernment(email);
			
			
			
			if(email.equals(Government.getEmail()) && password.equals(Government.getPassword()))
			{
				isAuthenticated = true;

			}
			return ResponseEntity.ok(isAuthenticated);
		}
}
