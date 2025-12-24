package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    private StudentDao stdDao;

    // Add Student
    public Student addStd(Student std) {
        return stdDao.save(std);
    }

    // Get Student by ID
    public Student getStudentById(int id) {
        Optional<Student> std = stdDao.findById(id);
        return std.orElse(null);
    }

    // Update Student
    public Student updateStd(Student std) {
        return stdDao.save(std);
    }

    // Get All Students
    public List<Student> getAllStudents() {
        return stdDao.findAll();
    }

    // Delete Student by ID
    public void deleteStudentById(int id) {
        stdDao.deleteById(id);
    }
}
