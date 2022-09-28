import React from 'react'
import { Route, Routes } from "react-router-dom";
import FinalFeature from './Feature/FinalFeature'


const AllRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/feature" element={<FinalFeature />}></Route>
      </Routes>

   

    </>
  )
}

export default AllRoutes