import React from "react";
import { Route, Routes } from "react-router-dom";
import BookDemo from "./BookDemo/BookDemo";
import FinalFeature from "./Feature/FinalFeature";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/feature" element={<FinalFeature />}></Route>
        <Route path="/BookDemo" element={<BookDemo />}></Route>
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default AllRoutes;
