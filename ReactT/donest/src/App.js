
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from 'react';

function App() {

  const [users, setuser] = useState([
    { username: "joe", password: 1234 },
    { username: "sean", password: 1234 }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login users={users} setuser={setuser} />}
        />

        <Route
          path="/signup"
          element={<Signup users={users} setuser={setuser} />}
        />

        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

