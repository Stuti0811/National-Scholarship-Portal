package com.nsp.backend.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nsp.backend.Repository.DocumentUploadRepository;
import com.nsp.backend.model.DocumentUpload;

@Service
public class DocumentUploadService {

    @Autowired
    private DocumentUploadRepository documentUploadRepository;

    public void saveFile(MultipartFile file) throws IOException {
        DocumentUpload document = new DocumentUpload();
        document.setName(file.getOriginalFilename());
        document.setContentType(file.getContentType());
        document.setData(file.getBytes());
        documentUploadRepository.save(document);
    }
}