import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
import FinalFeature from './Feature/FinalFeature'


const AllRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/feature" element={<FinalFeature />}></Route>
      </Routes>

      <Footer />

    </>
  )
}

export default AllRoutes