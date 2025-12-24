import { useState } from "react";
import { deleteStudentById } from "../Services/studentService";
const DeleteStudent = ({ onSuccess }) => {  // ✅ destructured
  const [id, setId] = useState("");
  const handleDelete = () => {
    if (!id) {
      alert("Please enter Student ID");
      return;
    }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (confirmDelete) {
      deleteStudentById(id)
        .then(() => {
          alert("Student deleted successfully");
          if (onSuccess) onSuccess();  // ✅ safe call
          setId(""); // reset input after delete
        })
        .catch(() => {
          alert("Error deleting student");
        });
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Delete Student</h2>
      <input
        type="number"
        placeholder="Enter Student ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button  className="button-delete" onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
};
export default DeleteStudent;