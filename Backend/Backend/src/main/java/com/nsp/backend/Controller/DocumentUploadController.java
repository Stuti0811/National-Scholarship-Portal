package com.nsp.backend.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
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
    private DocumentUploadService documentUploadService;

    @PostMapping("/save")
    public String uploadDocument(@RequestParam("aadharCard") MultipartFile aadharCard,
                                 @RequestParam("panCard") MultipartFile panCard,
                                 @RequestParam("domicile") MultipartFile domicile,
                                 @RequestParam("casteCertificate") MultipartFile casteCertificate,
                                 @RequestParam("characterCertificate") MultipartFile characterCertificate) {
        try {
            documentUploadService.saveFile(aadharCard);
            documentUploadService.saveFile(panCard);
            documentUploadService.saveFile(domicile);
            documentUploadService.saveFile(casteCertificate);
            documentUploadService.saveFile(characterCertificate);
            return "Documents uploaded successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to upload documents!";
        }
    }
}