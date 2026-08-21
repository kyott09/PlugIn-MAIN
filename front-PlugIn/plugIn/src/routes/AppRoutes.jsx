import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Users from "../pages/Users";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
