import axios from "axios";
const BASE_URL = "http://localhost:8081";
export const addStudent = (student) => {
  return axios.post(`${BASE_URL}/addstd`, student);
};
export const updateStudent = (student) => {
  return axios.put("http://localhost:8081/updatestd", student);
};
export const getStudentById = (id) => {
  return axios.get(`http://localhost:8081/getstd/${id}`);
};
export const getAllStudents = () => {
  return axios.get("http://localhost:8081/getall");
};
export const deleteStudentById = (id) => {
  return axios.delete(`http://localhost:8081/deletestd/${id}`);
};