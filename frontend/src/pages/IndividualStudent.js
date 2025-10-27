import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const IndividualStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try{
    const res = await axios.get(`http://localhost:5000/user/${id}`);
    setData(res.data);}
    catch(err){
      console.log(err);
      
    }
  };
  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      {data ? (
        <p>
          name : {data.name}<br />
          password : {data.password}<br />
          Dept : {data.dept}
        </p>
      ) : (
        <h2>Not Found</h2>
      )}
    </div>
  );
};

export default IndividualStudent;
