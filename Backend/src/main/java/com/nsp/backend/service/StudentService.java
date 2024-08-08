package com.nsp.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nsp.backend.Repository.StudentRepository;
import com.nsp.backend.model.Student;

@Service
public class StudentService {
	
	@Autowired
    private StudentRepository srepo;
	
	public Student saveData(Student s) {
		return srepo.save(s);
	}
	
	public List<Student> getAllData(){
		return srepo.findAll();
	}

	public Student loginStudent(String email) {
		
		return srepo.findByEmail(email);
	}


	

	
}
