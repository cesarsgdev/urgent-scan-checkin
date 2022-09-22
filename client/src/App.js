import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Events from "./pages/Events";
import Checkins from "./pages/Checkins";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import IndexGuest from "./pages/IndexGuest";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexGuest />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Welcome />}></Route>
            <Route path="/admin/events" element={<Events />}></Route>
            <Route path="/admin/checkins" element={<Checkins />}></Route>
            <Route path="/admin/users" element={<Users />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
