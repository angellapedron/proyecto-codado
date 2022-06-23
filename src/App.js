import NavBar from "./components/NavBar";
import React from 'react'
import Home from "./components/Home";
import Footer from "./components/Footer";
import CoursePage from "./components/CoursePage";
import Copyright from "./components/Copyright";
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cursos" element={<CoursePage/>}/>
      </Routes>
      <Footer/>
      <Copyright text={"@2022 Instituto Codado - Todos los derechos reservados "}/>
    </>
  )
}
