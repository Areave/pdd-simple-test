import React from "react";
import MainPage2 from "../pages/mainPage2/mainPage2";
import SecondPage from "../pages/secondPage/secondPage";
import {Routes, Route} from 'react-router-dom';

export const MyRouter = () => {
    return <>
        <Routes>
            <Route path='/*' element={<MainPage2/>}/>
            {/*<Route path='/secondPage' element={<SecondPage/>}/>*/}
        </Routes>
    </>
};