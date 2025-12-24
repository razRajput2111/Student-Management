// ...existing code...
import AddStudent from "./assets/Component/AddStudent";
import UpdateStudent from "./assets/Component/UpdateStudent";
import ViewStudents from "./assets/Component/ViewStudent";
import DeleteStudent from "./assets/Component/DeleteStudent"
import {useState} from 'react'
import './App.css'
function App() {
  const [refresh, setRefresh] = useState(false);
  const refreshTable = () => {
    setRefresh(!refresh);
  };
  return (
   <div className="app-container">
  <h1>Student Management</h1>
  <div className="form-card">
    <AddStudent onSuccess={refreshTable} />
  </div>
  <div className="form-card">
    <UpdateStudent onSuccess={refreshTable} />
  </div>
  <div className="form-card">
    <DeleteStudent onSuccess={refreshTable} />
  </div>
  <ViewStudents refresh={refresh} />
</div>
  );
}
export default App;
// ...existing code...