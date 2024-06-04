import React from "react";
import { DataCuisine } from "../datas/datacuisine";
import { Dataelectronique } from "../datas/dataelectronique";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className=" gap-5">
            <div className="   ml-2.5 flex gap-5">


                <div className=" border-solid border-inherit border rounded-xl mb-5 text-center">
                    <div className="bg-[#02518A] text-white  ">
                        <p >Montre & Vetement</p>
                    </div>
                    <div className="">
                        <div className="flex gap-3.5 m-2.5">
                            <div className="">
                            <NavLink to="/listevetementH"> <img src="src/fontend/images/images (3).jpeg" alt="" />
                            Homme</NavLink>    
                            </div>
                            <div className=""><img src="src/fontend/images/images (20).jpeg" alt="" />
                            <NavLink to="/montreB">Montre</NavLink>  
                            </div>
                        </div>
                        <div className="flex gap-3.5 m-2.5">
                            <div className=""><img src="src/fontend/images/images (7).jpeg" alt="" />
                            <NavLink to="/VetementE">Enfant</NavLink> 
                            </div>
                            <div className=""><img src="src/fontend/images/images (8).jpeg" alt="" />
                            <NavLink to="/VetementF">Femme</NavLink> 
                            </div>
                        </div>


                    </div>
                </div>



                {/* Bloque meuble */}
                <div className=" border-solid border-inherit border rounded-xl mb-5 text-center">
        <div className="bg-[#02518A] text-white  ">
            Montre & Vetement
        </div>
        <div className="">
            <div className="flex gap-3.5 m-2.5">
                <div className=""><img src="src/fontend/images/imagesmeubles/images (10).jpeg" alt="" />
                <NavLink to="/meuble">Meuble Salon</NavLink> 
                </div>
                <div className=""><img src="src/fontend/images/imagesmeubles/images (12).jpeg" alt="" />
                <NavLink to="/meuble">Meuble ChambreÒ</NavLink> 
                </div>
            </div>
            <div className="flex gap-3.5 m-2.5">
                <div className=""><img src="src/fontend/images/imagesmeubles/images (11).jpeg" alt="" />
                <p>Meuble TV</p>
                </div>
                <div className=""><img src="src/fontend/images/imagesmeubles/images (9).jpeg" alt="" />
                <p>Meuble TV</p>
                </div>
            </div>


        </div>
    </div>

                {/* <Vetements />
                <Meuble /> */}
            </div>
            <div className="flex gap-5">

                {/* Bloc cuisine */}

                <div className=" border-solid border-inherit border rounded-xl mb-5 mt-4 text-center">
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

{/* //Bloque electronique */}

                <div className=" border-solid border-inherit border rounded-xl mb-5 mt-4 text-center">

                    {
                        Dataelectronique.map((element) => (
                            <div className="">
                                <div className="bg-[#02518A] text-white  justify-center">
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
                                            {element.message3}
                                        </div>
                                        <div className=""><img src={element.avatar4} alt="" />
                                            {element.message4}
                                        </div>
                                    </div>


                                </div>
                            </div>
                        ))

                    }

                </div>




                {/* <Cuisine />
                <Electronique/> */}
            </div>

        </div>
    )
}
export default Home;