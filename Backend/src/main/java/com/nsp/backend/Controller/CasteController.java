package com.nsp.backend.Controller;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nsp.backend.model.Caste;
import com.nsp.backend.service.CasteService;

@RestController
@RequestMapping("/api/caste")
@CrossOrigin(origins = "http://localhost:3000")
public class CasteController {

    @Autowired
    private CasteService casteService;

    @PostMapping("/save")
    public String saveCasteInfo(@RequestParam("email") String email,
                                @RequestParam("nationality") String nationality,
                                @RequestParam("specialChild") String specialChild,
                                @RequestParam("ninthMarks") int ninthMarks,
                                @RequestParam("ninthMarksheet") MultipartFile ninthMarksheet,
                                @RequestParam("tenthMarks") int tenthMarks,
                                @RequestParam("tenthMarksheet") MultipartFile tenthMarksheet,
                                @RequestParam("caste") String caste,
                                @RequestParam("familyIncome") int familyIncome) {
        try {
            Caste casteInfo = new Caste();
            casteInfo.setEmail(email);
            casteInfo.setNationality(nationality);
            casteInfo.setSpecialChild(specialChild);
            casteInfo.setNinthMarks(ninthMarks);
            casteInfo.setTenthMarks(tenthMarks);
            casteInfo.setCaste(caste);
            casteInfo.setFamilyIncome(familyIncome);

            casteService.saveCasteInfo(casteInfo, ninthMarksheet.getBytes(), tenthMarksheet.getBytes());
            System.out.println("Done");
            return "Caste information saved successfully.";
        } catch (Exception e) {
            e.printStackTrace();
            return "Failed to save caste information.";
        }
    }
    
    
    @GetMapping("/decrypt/{email}")
    public Caste decryptCasteInfo(@PathVariable String email, @RequestParam("privateKey") String privateKeyString) {
        try {
            // Convert the private key from String to PrivateKey object
            byte[] privateKeyBytes = Base64.getDecoder().decode(privateKeyString);
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(privateKeyBytes);
            PrivateKey privateKey = keyFactory.generatePrivate(keySpec);

            // Decrypt the caste info
            return casteService.decryptCasteInfo(email, privateKey);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to decrypt caste information.");
        }
    }
}

