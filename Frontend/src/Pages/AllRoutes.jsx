import React from 'react'
import { Route, Routes } from "react-router-dom";
import BookDemo from './BookDemo/BookDemo';
import FinalFeature from './Feature/FinalFeature'


const AllRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/feature" element={<FinalFeature />}></Route>
        <Route path="/BookDemo" element={<BookDemo />}></Route>
      </Routes>

   

    </>
  )
}

export default AllRoutes