package com.nsp.backend.Controller;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nsp.backend.model.DocumentUpload;
import com.nsp.backend.service.DocumentUploadService;

@RestController
@RequestMapping("/api/document")
@CrossOrigin(origins = "http://localhost:3000")
public class DocumentUploadController {

    @Autowired
    private DocumentUploadService dservice;
    
    public DocumentUploadController(DocumentUploadService dservice) {
    	this.dservice = dservice;
    }

    @PostMapping("/save")
    public ResponseEntity<?> uploadDocument(@RequestParam("aadharCard") MultipartFile aadharCard,
                                                 @RequestParam("panCard") MultipartFile panCard,
                                                 @RequestParam("domicile") MultipartFile domicile,
                                                 @RequestParam("casteCertificate") MultipartFile casteCertificate,
                                                 @RequestParam("characterCertificate") MultipartFile characterCertificate) {
    	
    	try {
    		DocumentUpload formData = new DocumentUpload();
    		formData.setAadharCard(aadharCard.getBytes());
    		formData.setPanCard(panCard.getBytes());
    		formData.setDomicile(domicile.getBytes());
    		formData.setCasteCertificate(casteCertificate.getBytes());
    		formData.setCharacterCertificate(characterCertificate.getBytes());
    		
    		DocumentUpload savedData = dservice.save(formData);
            return ResponseEntity.ok(savedData);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error saving form: " + e.getMessage());
        }
    }
	
	
}