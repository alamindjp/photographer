import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home/Home";
import About from "./pages/About/About";
import Header from "./pages/sharePage/Header/Header";
import Footer from "./pages/sharePage/Footer/Footer";
import Blogs from "./pages/Blogs/Blogs";
import NotFound from "./pages/NotFound/NotFound";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Login from "./pages/sharePage/Login/Login";
import SignUp from "./pages/sharePage/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
