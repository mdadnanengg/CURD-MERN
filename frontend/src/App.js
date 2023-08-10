import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AddUser from "./components/users/AddUser";
import ViewUser from "./components/users/ViewUser";
import { useEffect } from "react";
import EditUser from "./components/users/EditUser";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="view/:id" element={<ViewUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
