package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nsp.backend.model.DocumentUpload;

public interface DocumentUploadRepository extends MongoRepository<DocumentUpload, String> {

}
