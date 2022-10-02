import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

import BookDemo from "./BookDemo/BookDemo";
import FinalFeature from "./Feature/FinalFeature";
import Signup from "./Signup/Signup";
import Footer from "../Components/Footer/Footer";
import Signin from "./Signin/signin";
import Timesheet from "./Timesheet/Timesheet";
import Finalinte from "./Integration/Finalinte";
import PricingPage from "./PricingPage/PricingPage";
import HomePage from "./HomePage/HomePage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/register" element={<Signup />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/feature" element={<FinalFeature />}></Route>
        <Route path="/BookDemo" element={<BookDemo />}></Route>
        <Route path="/auth/login" element={<Signin />}></Route>
        <Route path="/timesheet" element={<Timesheet />}></Route>
        <Route path="/integration" element={<Finalinte />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
