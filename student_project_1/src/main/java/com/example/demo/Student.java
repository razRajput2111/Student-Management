package com.example.demo;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "student_details")
public class Student {

    @Id
    private int sid;
    private String sname;
    private String email;

    
    public int getSid() {
        return sid;
    }

    public void setSid(int sid) {
        this.sid = sid;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public Student(int sid, String sname, String email) {
        super();
        this.sid = sid;
        this.sname = sname;
        this.email = email;
    }

    
    public Student() {
    }

    
    @Override
    public String toString() {
        return "Student [sid=" + sid + ", sname=" + sname + ", email=" + email + "]";
    }
}

