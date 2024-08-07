package com.nsp.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nsp.backend.Repository.DocumentUploadRepository;
import com.nsp.backend.model.DocumentUpload;

@Service
public class DocumentUploadService {

    @Autowired
    private DocumentUploadRepository drepo;

    public DocumentUpload save(DocumentUpload d) {
    	return drepo.save(d);
    }
    public List<DocumentUpload> getAll() {
        return drepo.findAll();
    }
}