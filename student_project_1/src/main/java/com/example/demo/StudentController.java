package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService stdService;

    
    @PostMapping("/addstd")
    public Student insertStudent(@RequestBody Student std) {
        return stdService.addStd(std);
    }

    
    @GetMapping("/getstd/{id}")
    public Student getStudent(@PathVariable int id) {
        return stdService.getStudentById(id);
    }

    
    @PutMapping("/updatestd")
    public Student updateStudent(@RequestBody Student std) {
        return stdService.updateStd(std);
    }

    
    @GetMapping("/getall")
    public List<Student> getAllStudent() {
        return stdService.getAllStudents();
    }

    
    @DeleteMapping("/deletestd/{id}")
    public String deleteStudent(@PathVariable int id) {
        stdService.deleteStudentById(id);
        return "Student deleted successfully";
    }
}

