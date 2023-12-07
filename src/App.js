import "./App.css";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import SingupPage from "./components/SingupPage/SingupPage";

function App() {
  const handelButton = () => {
    redirect("./login");
    console.log("on login page");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SingupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
