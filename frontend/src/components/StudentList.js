import React from "react";
import axios from "axios";

const StudentList = ({ students, fetchStudents }) => {
// Delete function
const deleteStudent = async (id) => {
try {
await axios.delete(`http://127.0.0.1:5000/api/students/${id}`);
fetchStudents(); // Refresh the list after deletion
} catch (error) {
console.error("Error deleting student:", error);
}
};

return (
<div className="list-container">
<h2>Student List</h2>
<ul>
{students.length === 0 ? (
<p>No students added yet.</p>
) : (
students.map((student, index) => (
<li key={index} className="student-item">
{student.name} - {student.course}
<button className="delete-button" onClick={() => deleteStudent(student.id)}>
Delete
</button>
</li>
))
)}
</ul>
</div>
);
};

export default StudentList;