import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const StudentDetails = () => {
  const [students, setStudent] = useState([{}]);
  useEffect(() => {
    fetchStudent();
  }, []);
  const fetchStudent = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user");
      console.log(res.data);
      setStudent(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <ol>
        {students.map((item) => (
          <>
            <li>
              <Link to={`/${item.id}`}>{item.id}</Link>
              <br />
              To view:<Link to={`/view/${item.id}`}>{item.id}</Link>
              <br />
              Name : {item.name} Dept:{item.dept}
            </li>
          </>
        ))}
      </ol>
    </div>
  );
};

export default StudentDetails;
