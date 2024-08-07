package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nsp.backend.model.Government;

public interface GovernmentRepository extends MongoRepository<Government, String>{

	public Government findByEmail(String email); 

}
