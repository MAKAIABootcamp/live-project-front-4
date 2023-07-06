import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pages/Students/login/Login';
import HomeStudents from '../pages/Students/homeStudents/HomeStudents';
import FormStudents from '../pages/Students/formStudents/FormStudents';
import StateStudents from '../pages/Students/stateStudents/StateStudents';
import ProfileStudents from '../pages/Students/profileStudents/ProfileStudents';
import BenefitsStudents from '../pages/Students/benefitsStudents/BenefitsStudents';
import BootService from '../pages/Students/bootService/BootService';
import {GlobalStyles} from "../StylesGlobal/GlobalStyles"

const AppRouter = () => {
  return (
    
      <GlobalStyles>
      <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="formstudents" element={<FormStudents/>}/>
            <Route path="homestudents" element={<HomeStudents/>}/>
            <Route path="statestudents" element={<StateStudents/>}/>
            <Route path="profilestudents" element={<ProfileStudents/>}/>
            <Route path="benefitsStudents" element={<BenefitsStudents/>}/>
            <Route path="bootservice" element={<BootService/>}/>
        </Routes>
      </BrowserRouter>
      </GlobalStyles>
    
  )
}

export default AppRouter
