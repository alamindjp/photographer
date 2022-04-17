import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home/Home";
import About from "./pages/About/About";
import Header from "./pages/sharePage/Header/Header";
import Footer from "./pages/sharePage/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
