import React from 'react'
import {Routes,Route} from "react-router-dom";
import {Login,Mypage,Signup} from "../pages/index";

const Router = () => {
  return (
    <>
    <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/mypage/:userId" element={<Mypage/>}/>
        </Routes>
    </>
  )
}

export default Router