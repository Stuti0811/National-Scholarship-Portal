package com.nsp.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.nsp.backend.Repository.PersonalInfoRepo;
import com.nsp.backend.Repository.StudentRepository;
import com.nsp.backend.model.PersonalInfo;

public class StudentService {
	@Autowired
    private StudentRepository srepo;
	
	public PersonalInfo saveData(PersonalInfo p) {
		return srepo.save(p);
	}
	
	public List<PersonalInfo> getAllData(){
		return srepo.findAll();
	}
}
