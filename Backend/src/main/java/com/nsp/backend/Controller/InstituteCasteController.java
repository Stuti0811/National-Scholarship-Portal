package com.nsp.backend.Controller;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nsp.backend.Repository.CasteRepository;
import com.nsp.backend.Repository.CombinedFormRepository;
import com.nsp.backend.model.Caste;
import com.nsp.backend.model.CombinedForm;
import com.nsp.backend.model.InstituteCasteStudent;

@RestController
@RequestMapping("/api/castestudentslist")
@CrossOrigin(origins="http://localhost:3000")
public class InstituteCasteController {
	@Autowired
    private CombinedFormRepository combinedFormRepository;
	@Autowired
	private CasteRepository crepo;
	
	 // Get all students whose email is present in both tables and marks > 90
    @GetMapping("/getall")
    public List<InstituteCasteStudent> getAllStudents() {
        List<CombinedForm> combinedForms = combinedFormRepository.findAll();
        List<Caste> caste = crepo.findAll();

        // Create a map of emails to marks from the NtseForm repository
        Map<String, Integer> casteEmailToMarks = caste.stream()
                .filter(c -> c.getTenthMarks() > 90 && c.getFamilyIncome()<800000) // Filter by marks > 90
                .collect(Collectors.toMap(Caste::getEmail,Caste::getTenthMarks));

        // Filter combinedForms to include only those emails present in both repositories and marks > 90
        List<InstituteCasteStudent> result = combinedForms.stream()
                .filter(cf -> casteEmailToMarks.containsKey(cf.getEmail()))
                .map(cf -> new InstituteCasteStudent(
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
        if (crepo.existsById(email)) {
        	crepo.deleteById(email);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
