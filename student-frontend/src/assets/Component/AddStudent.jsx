// ...existing code...
import { useState } from "react";
import { addStudent } from "../Services/studentService";

const AddStudent = ({ onSuccess }) => {
    const [student, setStudent] = useState ({
        sid : "",
        sname : "",
        email : ""
    });
    const handleChange = (e) => {
        setStudent ({
            ...student,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(student)
        .then(() => {
            alert("Student added successfully");
            if (onSuccess) onSuccess();
            setStudent({ sid : "", sname : "", email : ""});
        })
        .catch(() => {
            alert("Error adding student");
        });
    };
    return (
        <div style={{ padding: "20px" }}>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="number"
                name="sid"
                placeholder="Student ID"
                value={student.sid}
                onChange={handleChange}
                required />
                <br /> <br />
                <input 
                type="text"
                name="sname"
                placeholder="Student Name"
                value={student.sname}
                onChange={handleChange}
                required />
                <br /> <br />
                <input 
                type="email"
                name="email"
                placeholder="Email"
                value={student.email}
                onChange={handleChange}
                required />
                <br /> <br />
                <button type="submit" className="button-add">Add Student</button>
            </form>
        </div>
    );
};
export default AddStudent;