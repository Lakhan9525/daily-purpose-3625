import React from "react";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const Main = () => {
  return (
    <div style={{ width: "100vw", display: "flex" }}>
      <SideBar />
      <MainContent />
      {/* <BookDemo/> */}
    </div>
  );
};

export default Main;
