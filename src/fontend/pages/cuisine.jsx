import React from "react";
import { DataCuisine } from "../datas/datacuisine";


function Cuisine() {
    return (


        <div className=" border-solid border-inherit border rounded-xl mb-5">

            {
                DataCuisine.map((element) => (
                    <>
                        <div className="bg-[#02518A] text-white  ">
                            {element.Tile}
                        </div>

                        <div className="">
                            <div className="flex gap-3.5 m-2.5">
                                <div className=""><img src={element.avatar1} alt="" />
                                    {element.message1}
                                </div>
                                <div className=""><img src={element.avatar2} alt="" />
                                    {element.message2}
                                </div>
                            </div>
                            <div className="flex gap-3.5 m-2.5">
                                <div className=""><img src={element.avatar3} alt="" />
                                    {element.message1}
                                </div>
                                <div className=""><img src={element.avatar4} alt="" />
                                    {element.message2}
                                </div>
                            </div>


                        </div>
                    </>
                ))

            }

        </div>



    )
}
export default Cuisine;