import { useState } from "react";
import { getStudentById, updateStudent } from "../Services/studentService";
const UpdateStudent = ({onSuccess}) => {
  const [id, setId] = useState("");
  const [student, setStudent] = useState({
    sid: "",
    sname: "",
    email: ""
  });
  const fetchStudent = () => {
    getStudentById(id)
      .then((res) => {
        if (res.data) {
          setStudent(res.data);
        } else {
          alert("Student not found");
        }
      })
      .catch(() => {
        alert("Error fetching student");
      });
  };
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    updateStudent(student)
      .then(() => {
  alert("Student updated successfully");
  onSuccess();   
})
      .catch(() => {
        alert("Update failed");
      });
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Student</h2>
      <input
        type="number"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button   className="button-fetch" onClick={fetchStudent}>Fetch</button>
      <br /><br />
      {student.sid && (
        <form onSubmit={handleUpdate}>
          <input
            type="number"
            name="sid"
            value={student.sid}
            disabled
          /><br /><br />
          <input
            type="text"
            name="sname"
            value={student.sname}
            onChange={handleChange}
          /><br /><br />
          <input
            type="email"
            name="email"
            value={student.email}
            onChange={handleChange}
          /><br /><br />
          <button className="button-update" type="submit">Update Student</button>
        </form>
      )}
    </div>
  );
};
export default UpdateStudent;