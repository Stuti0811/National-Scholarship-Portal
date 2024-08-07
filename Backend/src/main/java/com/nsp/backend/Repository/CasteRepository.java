package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nsp.backend.model.Caste;

public interface CasteRepository extends MongoRepository<Caste, String> {

}
