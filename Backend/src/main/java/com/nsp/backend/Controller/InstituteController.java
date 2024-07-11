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
import com.nsp.backend.model.Institute;
import com.nsp.backend.service.GovernmentService;
import com.nsp.backend.service.InstituteService;


@RestController
@RequestMapping(value="/api/institute")
@CrossOrigin(origins="http://localhost:3000")
public class InstituteController {
		
		@Autowired
		public InstituteService iservice;
		
		 @PostMapping("/login")
			public ResponseEntity<Boolean> loginGovernment(@Validated @RequestBody Government g) throws ResourceNotFoundException
			{
				Boolean isAuthenticated = false;
				String email=g.getEmail();
				String password=g.getPassword();
			
				Institute institute  = iservice.loginInstitute(email);
				
				
				
				if(email.equals(institute.getEmail()) && password.equals(institute.getPassword()))
				{
					isAuthenticated = true;

				}
				return ResponseEntity.ok(isAuthenticated);
			}
	}


