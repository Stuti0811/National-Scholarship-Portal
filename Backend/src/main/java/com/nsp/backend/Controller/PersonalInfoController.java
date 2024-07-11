package com.nsp.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nsp.backend.model.PersonalInfo;
import com.nsp.backend.service.PersonalInfoService;

@RestController
@RequestMapping(value="/api/forms")
@CrossOrigin(origins="http://localhost:3000")
public class PersonalInfoController {
	@Autowired
    private PersonalInfoService pservice;
    
    @PostMapping("/save")
    public PersonalInfo saveData(@RequestBody PersonalInfo pinfo) {
        return pservice.saveData(pinfo);
    }
    
    @GetMapping("/getall")
    public List<PersonalInfo> getAllData() {
        return pservice.getAllData();
    }
}
