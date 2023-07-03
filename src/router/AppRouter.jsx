import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../pagesStudents/login/Login';
import HomeStudents from '../pagesStudents/homeStudents/HomeStudents';
import FormStudents from '../pagesStudents/formStudents/FormStudents';
import StateStudents from '../pagesStudents/stateStudents/StateStudents';
import ProfileStudents from '../pagesStudents/profileStudents/ProfileStudents';
import BenefitsStudents from '../pagesStudents/benefitsStudents/BenefitsStudents';
import BootService from '../pagesStudents/bootService/BootService';

const AppRouter = () => {
  return (
    <div>
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
    </div>
  )
}

export default AppRouter
