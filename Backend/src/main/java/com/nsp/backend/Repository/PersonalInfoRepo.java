package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nsp.backend.model.PersonalInfo;

public interface PersonalInfoRepo extends MongoRepository<PersonalInfo, String> {

}
