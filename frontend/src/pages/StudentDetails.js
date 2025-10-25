import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const StudentDetails = () => {
  const [students, setStudent] = useState([{}]);
  useEffect(() => {
    fetchStudent();
  }, []);
  const fetchStudent = async () => {
    const res = await axios.get("http://localhost:5000/user");
    console.log(res.data);
    setStudent(res.data);
  };
  return (
    <div>
      <ul>
        {students.map((item) => (
          <>
            <li key={item._id}>
              <Link to={`/${item.id}`}>{item.id}</Link>
              <br />
              Name : {item.name} Dept:{item.dept}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default StudentDetails;
