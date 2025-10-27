import { useForm } from "react-hook-form";
import axios from "axios";
const CreateStudent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    await axios.post("http://localhost:5000/user", data);
    alert("Successful");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="ID"
          {...register("id", { required: "id req" })}
        /><br />
        <input
          type="string"
          placeholder="name"
          {...register("name", { required: "name req" })}
        /><br />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: "pass req" })}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudent;
