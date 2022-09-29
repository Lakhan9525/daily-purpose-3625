import React from 'react'
import { Route, Routes } from "react-router-dom";
import FinalFeature from './Feature/FinalFeature'
import Signup from './Signup/Signup';


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/feature" element={<FinalFeature />}></Route>
      </Routes>

   

    </>
  )
}

export default AllRoutes