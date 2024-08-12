package com.nsp.backend.Controller;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nsp.backend.Repository.CombinedFormRepository;
import com.nsp.backend.Repository.NtseFormRepository;
import com.nsp.backend.model.CombinedForm;
import com.nsp.backend.model.InstituteNtseStudent;
import com.nsp.backend.model.NtseForm;

@RestController
@RequestMapping("/api/studentslist")
@CrossOrigin(origins="http://localhost:3000")
public class InstituteNtseController {

    @Autowired
    private CombinedFormRepository combinedFormRepository;
    @Autowired
    private NtseFormRepository ntseFormRepository;

    // Get all students whose email is present in both tables
    @GetMapping("/getall")
    public List<InstituteNtseStudent> getAllStudents() {
        List<CombinedForm> combinedForms = combinedFormRepository.findAll();
        List<NtseForm> ntseForms = ntseFormRepository.findAll();

//        // Log the size of the lists
//        System.out.println("CombinedForms size: " + combinedForms.size());
//        System.out.println("NtseForms size: " + ntseForms.size());
//
        // Create a set of emails from the NtseForm repository for quick lookup
        Set<String> ntseEmails = ntseForms.stream()
                .map(NtseForm::getEmail)
                .collect(Collectors.toSet());

        // Log the size of the email set
//        System.out.println("NtseEmails size: " + ntseEmails.size());

        // Filter combinedForms to include only those emails present in both repositories
        List<InstituteNtseStudent> result = combinedForms.stream()
                .filter(cf -> ntseEmails.contains(cf.getEmail()))
                .map(cf -> new InstituteNtseStudent(
                        cf.getFirstName() + " " + cf.getMiddleName() + " " + cf.getLastName(),
                        cf.getEmail()
                ))
                .collect(Collectors.toList());

        // Log the size of the result list
        System.out.println("Result size: " + result.size());

        return result;
    }

    // Delete a student
    @DeleteMapping("delete/{email}")
    public ResponseEntity<Void> deleteStudent(@PathVariable String email) {
        if (ntseFormRepository.existsById(email)) {
        	ntseFormRepository.deleteById(email);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}