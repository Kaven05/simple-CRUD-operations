import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import StudentDetails from "./pages/StudentDetails";
import CreateStudent from './pages/CreateStudent';
import IndividualStudent from "./pages/IndividualStudent";
function App() {
  return (
    <>
    <Home />
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/all" element={<StudentDetails />} />
      <Route path="/create" element={<CreateStudent />} />
      <Route path="/:id" element={<IndividualStudent />} />
    </Routes>
    </>
  );
}

export default App;
