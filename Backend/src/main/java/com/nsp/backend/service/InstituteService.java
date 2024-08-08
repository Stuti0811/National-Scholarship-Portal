package com.nsp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nsp.backend.Repository.InstituteRepository;
import com.nsp.backend.model.Institute;

@Service
public class InstituteService {

		@Autowired
	    private InstituteRepository irepo;
		

		public Institute loginInstitute(String email) {
			
			return irepo.findByEmail(email);
		}


	

}
