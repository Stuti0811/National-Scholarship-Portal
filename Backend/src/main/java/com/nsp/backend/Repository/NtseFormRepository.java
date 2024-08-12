package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nsp.backend.model.NtseForm;

public interface NtseFormRepository extends MongoRepository<NtseForm, String>{
	NtseForm findByEmail(String email);
}
