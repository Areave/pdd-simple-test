import React from "react";
import MainPage from "../pages/mainPage/mainPage";
import SecondPage from "../pages/secondPage/secondPage";
import {Routes, Route} from 'react-router-dom';

export const MyRouter = () => {
    return <>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/secondPage' element={<SecondPage/>}/>
        </Routes>
    </>
};