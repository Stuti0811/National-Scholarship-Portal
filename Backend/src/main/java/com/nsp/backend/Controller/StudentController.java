package com.nsp.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.nsp.backend.Exception.ResourceNotFoundException;
import com.nsp.backend.model.Student;

import com.nsp.backend.model.Student;
import com.nsp.backend.service.PersonalInfoService;
import com.nsp.backend.service.StudentService;

@RestController
@RequestMapping(value="/api/student")
@CrossOrigin(origins="http://localhost:3000")
public class StudentController {
	
		@Autowired
	    public StudentService sservice;
	    
	    @PostMapping("/save")
	    public Student saveData(@RequestBody Student s) {
	        return sservice.saveData(s);
	    }
	    
	    @GetMapping("/getall")
	    public List<Student> getAllData() {
	        return sservice.getAllData();
	    }
	    
	    @PostMapping("/login")
		public ResponseEntity<Boolean> loginStudent(@Validated @RequestBody Student s) throws ResourceNotFoundException
		{
			Boolean isAuthenticated = false;
			String email=s.getEmail();
			String password=s.getPassword();
		
			Student student = sservice.loginStudent(email);
			
			
			
			if(email.equals(student.getEmail()) && password.equals(student.getPassword()))
			{
				isAuthenticated = true;

			}
			return ResponseEntity.ok(isAuthenticated);
		}
		

	
}


