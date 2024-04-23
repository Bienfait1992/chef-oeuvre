import React from "react";



function Signup() {
    return (
        <div className="border-solid border-inherit border rounded-xl mb-5 ml-96 p-3 justify-center ">
            <div className="ml-60 text-[#E64C3C] mb-5 text-2xl"><p>Inscriprtion</p></div>
            <form action="gap-3 p-3 justify-center flex">
                <div className="flex">
                    <div className="mb-3.5 ">
                        <div className="mb-12 mt-2"><label>Votre Nom</label></div>
                        <div className="mb-12"><label>E-mail</label></div>
                        <div><label>Mot de passe</label></div>
                    </div>

                    <div className="mb-3.5 ml-20">
                        <div className="mb-8"><input type="text" placeholder="Mettez votre nom ici" className="  border border-black ml-2.5 w-96 h-10 " /></div>
                        <div className="mb-8"><input type="text" placeholder="Mettez votre E-mail ici" className="border border-black ml-2.5 w-96 gap-3 h-10" /></div>
                        <div><input type="text" placeholder="Mettez votre mot de passe ici" className="border border-black ml-2.5 w-96 h-10" /></div>
                    </div>
                </div>
            </form>
            <div>
                <button className="bg-[#E64C3C] rounded-xl text-white p-3 mt-14 ml-64">S'inscrire</button>
            </div>
        </div>
    )
}
export default Signup;