import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Pages/Home/NavBar/NavBar";
import Footer from "../components/SharedComponents/Footer";


const Main = () => {
  const location = useLocation();
  // console.log(location);
  // const noHeaderFooter =
  //   location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    //bg-[#ff9138c7]
    <div className="">
      <div>
       <NavBar></NavBar>
        <main className="min-h-[calc(100vh-10rem)]">
          <Outlet></Outlet>
        </main>
        {/* {noHeaderFooter || <Footer></Footer>} */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
