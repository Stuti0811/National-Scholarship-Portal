package com.nsp.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nsp.backend.service.EmailSenderService;

@RestController
@RequestMapping("api/email")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {
    
    @Autowired
    private EmailSenderService emailSenderService;
    
    @PostMapping("/send")
    public String sendTheEmail(@RequestParam("email") String email, 
                               @RequestPart("file") MultipartFile file) {
        try {
            emailSenderService.sendEmail(
            		email
            		, "Approval of Your Scholarship Application "
            		, "Dear Student,\n"
            				+ "\n"
            				+ "I hope this email finds you well.\n"
            				+ "\n"
            				+ "We are pleased to inform you that your scholarship application has been approved by the National Scholarship Authority. Congratulations on this achievement!\n"
            				+ "\n"
            				+ "Please find the official notice attached to this email, which contains detailed information about your scholarship, including the terms and conditions and other relevant details.\n"
            				+ "\n"
            				+ "Kindly review the attached notice carefully. If you have any questions or need further assistance, please do not hesitate to contact us at +91 9407271938.\n"
            				+ "\n"
            				+ "Once again, congratulations on your scholarship approval! We wish you continued success in your academic endeavours.\n"
            				+ "\n"
            				+ "Best regards,\n"
            				+ "Vardan Magarkar\n"
            				+ "National Scholarship Authority."
            		, file
            		);
            return "Email sent successfully";
        } catch (Exception e) {
            return "Failed to send email: " + e.getMessage();
        }
    }

}
