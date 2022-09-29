import React from 'react'
import { Route, Routes } from "react-router-dom";
import BookDemo from './BookDemo/BookDemo';
import FinalFeature from './Feature/FinalFeature'
import Footer from "../Components/Footer/Footer"
import Signin from './Sign In/signin';

const AllRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/feature" element={<FinalFeature />}></Route>
        <Route path="/BookDemo" element={<BookDemo />}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>

      <Footer />

    </>
  )
}

export default AllRoutes