package com.nsp.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.backend.Repository.PersonalInfoRepo;
import com.nsp.backend.model.PersonalInfo;

@Service
public class PersonalInfoService {
	
	@Autowired
    private PersonalInfoRepo prepo;
	
	public PersonalInfo saveData(PersonalInfo p) {
		return prepo.save(p);
	}
	
	public List<PersonalInfo> getAllData(){
		return prepo.findAll();
	}
	
}
