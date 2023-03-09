import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Auth from "./Auth"
import Page1 from "./luffy"
import Add from "./home"
import Update from "./update";
import Delete from "./delete";
import Showdata from "./get";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/home" element={<Add/>}/>
        <Route path="/login" element={<Auth />} />
        <Route path="/update" element={<Update/>} />
        <Route path="/update" element={<Update/>} />
        <Route path="/delete" element={<Delete/>} />
        <Route path="/show" element={<Showdata/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 