package com.nsp.backend.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nsp.backend.model.Student;

public interface StudentRepository extends MongoRepository<Student, String>{

	public Student findByEmail(String email);

}
