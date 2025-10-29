import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const StudentDetails = () => {
  const [students, setStudent] = useState([{}]);
  useEffect(() => {
    fetchStudent();
  }, [students]);
  const fetchStudent = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user");
      console.log(res.data);
      setStudent(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/${id}`);
    } catch (error) {
      console.log(error);
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
              <br />
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          </>
        ))}
      </ol>
    </div>
  );
};

export default StudentDetails;
