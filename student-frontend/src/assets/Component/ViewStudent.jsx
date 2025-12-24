import { useEffect, useState } from "react";
import { getAllStudents } from "../Services/studentService";
const ViewStudents = ({ refresh }) => {
  const [students, setStudents] = useState([]);
  const loadStudents = () => {
    getAllStudents()
      .then((res) => setStudents(res.data))
      .catch(() => alert("Error fetching students"));
  };
  useEffect(() => {
    loadStudents();
  }, [refresh]); // 👈 IMPORTANT LINE
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Students</h2>
      <table border="1" cellPadding="10" className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std) => (
            <tr key={std.sid}>
              <td>{std.sid}</td>
              <td>{std.sname}</td>
              <td>{std.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ViewStudents;