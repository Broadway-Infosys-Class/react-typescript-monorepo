import React from "react";

interface Istudent {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

const StudentsDetail = (props: any) => {
  const student: Istudent = props.detail;
  return (
    <div>
      <h3>
        {student.first_name} {student.last_name}
      </h3>
      <p>Address: {student.address}</p>
      <p>Email: {student.email}</p>
    </div>
  );
};

export default StudentsDetail;
