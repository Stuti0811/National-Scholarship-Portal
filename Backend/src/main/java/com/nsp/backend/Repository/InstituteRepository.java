package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nsp.backend.model.Institute;

public interface InstituteRepository extends MongoRepository<Institute, String>{

	public Institute findByEmail(String email);

}
