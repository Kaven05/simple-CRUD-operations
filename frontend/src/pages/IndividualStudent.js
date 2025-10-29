import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const IndividualStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navi = useNavigate();
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/user/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/user/${id}`);
    navi(-1);
  };
  return (
    <div>
      <p>jhgfd</p>
      {data ? (
        <p>
          name : {data.name}
          <br />
          password : {data.password}
          <br />
          Dept : {data.dept}
          <button onClick={handleDelete}>Delete</button>
        </p>
      ) : (
        <h2>Not Found</h2>
      )}
    </div>
  );
};

export default IndividualStudent;
