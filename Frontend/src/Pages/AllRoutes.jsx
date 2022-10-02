import React from "react";
import { Route, Routes } from "react-router-dom";

import FinalFeature from "./Feature/FinalFeature";
import Signup from "./Signup/Signup";
import Signin from "./Signin/signin";
import Timesheet from "./Timesheet/Timesheet";
import Finalinte from "./Integration/Finalinte";
import HomePage from "./HomePage/HomePage";
import BookDemo from "./BookDemo/BookDemo";
import FinalPricing from "./PricingPage/FinalPricing";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/register" element={<Signup />} />
        <Route path="/pricing" element={<FinalPricing />} />
        <Route path="/time-tracking" element={<FinalFeature />}></Route>
        <Route path="/free-demo" element={<BookDemo />}></Route>
        <Route path="/auth/login" element={<Signin />}></Route>
        <Route path="/timesheet" element={<Timesheet />}></Route>
        <Route path="/integration" element={<Finalinte />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
