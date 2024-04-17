import React from "react";
import Vetements from "../pages/vetements";
import Meuble from "../pages/meuble";
import Cuisine from "../pages/cuisine";


function Home() {
    return (
        <>
            <div className=" mt-3  ml-2.5 ">

                <Vetements />
                <Meuble />
            </div>
            <Cuisine />


        </>
    )
}
export default Home;