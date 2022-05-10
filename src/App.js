
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Orders from "./Components/Orders";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="orders" element={<Orders/>} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
