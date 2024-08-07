package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nsp.backend.model.CombinedForm;

@Repository
public interface CombinedFormRepository extends MongoRepository<CombinedForm, String> {
}
