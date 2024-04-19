import React from "react";



function Signup() {
    return (
        <div className="border-solid border-inherit border rounded-xl mb-5 p-3 justify-center">
            <form action="gap-3 p-3 justify-center">
                <div className="mb-3.5">
                    <label>Votre Nom</label>
                    <input type="text" placeholder="Mettez votre nom ici" className="  border border-black ml-8 w-96" />
                </div>
                <div className="mb-3.5">
                    <label>E-mail</label>
                    <input type="text" className="border border-black ml-16 w-96 " />
                </div>
                <div className="mb-3.5">
                    <label>Mot de passe</label>
                    <input type="text" className="border border-black ml-2.5 w-96 " />
                </div>
            </form>
            <div>
                <button className="bg-[#E64C3C] rounded-xl text-white p-3 mt-14">S'inscrire</button>
            </div>
        </div>
    )
}
export default Signup;