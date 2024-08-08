package com.nsp.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nsp.backend.Repository.GovernmentRepository;
import com.nsp.backend.model.Government;

@Service
public class GovernmentService {

		@Autowired
	    private GovernmentRepository grepo;
		

		public Government loginGovernment(String email) {
			
			return grepo.findByEmail(email);
		}


		


		

		
	

}
