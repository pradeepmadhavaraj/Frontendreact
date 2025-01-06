import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  User  from './User';
import  Createuser  from "./Createuser";
import  Updateuser  from "./Updateuser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/create" element={<Createuser />} />
        <Route path="/update/:id" element={<Updateuser />} />
      </Routes>
    </Router>
  );
}

export default App;