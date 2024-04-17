import React from "react";
import Header from "./header";
import Footer from "./footer";
import Left_sidebar from "./letf_sidebar";
import Home from "./Home";




function Layout() {
    return (
        <>
            <Header />
            <div className="flex">
                <Left_sidebar />
                <Home />
            </div>
            <Footer />
        </>


    )
}
export default Layout;