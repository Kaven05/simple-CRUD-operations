import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdatStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState({ id: "", name: null, password: null });

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:5000/user/${id}`);
    setData(res.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/user/${id}`, data);
      alert("Successful");
    } catch (err) {
      console.log(err);
      alert("Failed to update!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="id"
          value={data.id || ""}
          onChange={(e) => setData({ ...data, id: e.target.value })}
        />

        <input
          type="text"
          placeholder="name"
          value={data.name || ""}
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={data.password || ""}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdatStudent;
