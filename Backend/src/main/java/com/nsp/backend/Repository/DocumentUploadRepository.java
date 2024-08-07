package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.nsp.backend.model.DocumentUpload;

@Repository
public interface DocumentUploadRepository extends MongoRepository<DocumentUpload, byte[]> {

}
