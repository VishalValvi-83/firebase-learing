import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/reigstration/login";
import Signup from "./pages/reigstration/signup";
import Add from "./pages/add";
import Update from "./pages/update";
import ContectProvider from './components/context/myContextProvider'

const App = () => {
  return (
    <>
      <ContectProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </BrowserRouter>
      </ContectProvider>
     
    </>
  )
}

export default App
