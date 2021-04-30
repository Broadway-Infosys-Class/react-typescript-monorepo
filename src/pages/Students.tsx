import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentsDetail from "../partials/StudentsDetail";

interface Istudent {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

const Students = () => {
  const [students, setStudents] = useState([] as Istudent[]);
  const fetchStudentsList = async () => {
    const res = await axios.get("http://localhost:4000/students");
    console.log("====", res);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudentsList();
  }, []);
  return (
    <div>
      <h1>Welcome to students List</h1>
      {students.map((student) => (
        <StudentsDetail detail={student} />
      ))}
    </div>
  );
};

export default Students;
