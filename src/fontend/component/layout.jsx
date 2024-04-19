import React from "react";
import Header from "./header";
import Footer from "./footer";
import Left_sidebar from "./letf_sidebar";
import Home from "./Home";
import { Outlet } from "react-router-dom";




function Layout() {
    return (
        <>
            <Header />
            <div className="flex gap-5 mt-3">
                <Left_sidebar />
                <Outlet/>
                {/* <Home/> */}
            </div>
            <Footer />
        </>


    )
}
export default Layout;