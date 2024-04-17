import React from "react";



function Meuble(){
    return(
        <div className="w-3/12 border-solid border-inherit border rounded-xl mb-5">
        <div className="bg-[#02518A] text-white  ">
            Montre & Vetement
        </div>
        <div className="">
            <div className="flex gap-3.5 m-2.5">
                <div className=""><img src="src/fontend/images/images (3).jpeg" alt="" />
                    <p>Homme</p>
                </div>
                <div className=""><img src="src/fontend/images/images (20).jpeg" alt="" />
                    <p>Montre</p>
                </div>
            </div>
            <div className="flex gap-3.5 m-2.5">
                <div className=""><img src="src/fontend/images/images (7).jpeg" alt="" />
                <p>Enfants</p>
                </div>
                <div className=""><img src="src/fontend/images/images (8).jpeg" alt="" />
                <p>Femmes</p>
                </div>
            </div>


        </div>
    </div>
    )
}
export default Meuble;