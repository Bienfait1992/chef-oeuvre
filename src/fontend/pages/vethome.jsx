import React from "react";
import { DataVtmh } from "../datas/data_vetementH/data_vetementH";


function VetementH() {
    return (
        <>
            <div className="text-[#02518A] bg-[#02518A] ">Vetements Homme</div>

            <div className="w-full justify-center items-center flex flex-wrap gap-3 ">

                {
                    DataVtmh.map((Element) => (
                        <>

                            <div className="border-solid border-inherit border rounded-xl mb-5 w-96 justify-center items-center pt-20">
                                <div ><img src={Element.avatar1} alt="" className="m-auto mt-5 " /></div>
                                <div className="ml-20">{Element.description}</div>
                                <div className="ml-20"><span>Prix:</span>{Element.prix}</div>
                                <button className="bg-[#E64C3C] rounded-xl text-white p-3 mt-3 mb-3 ml-20">Voir plus</button>
                            </div>

                        </>
                    ))
                }

            </div>
        </>

    )
}
export default VetementH;