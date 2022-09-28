import React from 'react'
import { Route, Routes } from "react-router-dom";
import FinalFeature from './Feature/FinalFeature'
import Footer from "../Components/Footer/Footer"

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