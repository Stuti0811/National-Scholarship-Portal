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
    public ResponseEntity<String> uploadDocument(@RequestParam("aadharCard") MultipartFile aadharCard,
                                                 @RequestParam("panCard") MultipartFile panCard,
                                                 @RequestParam("domicile") MultipartFile domicile,
                                                 @RequestParam("casteCertificate") MultipartFile casteCertificate,
                                                 @RequestParam("characterCertificate") MultipartFile characterCertificate) {
    	
    	try {
            dservice.save(
                aadharCard != null ? aadharCard.getBytes() : null,
                panCard != null ? panCard.getBytes() : null,
                domicile != null ? domicile.getBytes() : null,
                casteCertificate != null ? casteCertificate.getBytes() : null,
                characterCertificate != null ? characterCertificate.getBytes() : null
            );
            return ResponseEntity.ok("Caste information saved successfully.");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to save caste information.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("An error occurred while saving caste information.");
        }
    }
	
	
}