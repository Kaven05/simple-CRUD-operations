import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateStudent from "./pages/CreateStudent";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import UpdatStudent from "./pages/UpdatStudent";
import IndividualStudent from "./pages/IndividualStudent";
function App() {
  return (
    <>
      <Home />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/all" element={<StudentDetails />} />
        <Route path="/create" element={<CreateStudent />} />
        <Route path="/view/:id" element={<IndividualStudent />} />
        <Route path="/:id" element={<UpdatStudent />} />
      </Routes>
    </>
  );
}

export default App;
