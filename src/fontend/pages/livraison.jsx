import React from "react";



function Livraison() {
    return (
        <div className="border-solid border-inherit border rounded-xl mb-5 ml-96 p-3 justify-center ">
            <div className="ml-44 text-[#E64C3C] mb-5 text-2xl"><p>Votre adrese de livraison</p></div>
            <form action="gap-3 p-3 justify-center flex">
                <div className="flex">
                    <div className="mb-3.5 ">
                        <div className="mb-12 mt-2"><label>Votre Nom</label></div>
                        <div className="mb-12"><label>commune</label></div>
                        <div className="mb-12"><label>Rue</label></div>
                        <div className="mb-12"><label>Mobile1</label></div>
                        <div className="mb-12"><label>Mobile2</label></div>
                        <div className="mb-12"><label>Reference</label></div>

                    </div>

                    <div className="mb-3.5 ml-20">
                        <div className="mb-8"><input type="text" id="adresse" name="" placeholder="Mettez votre nom ici" className="  border border-black ml-2.5 w-96 h-10 " /></div>
                        <div className="mb-8">

                            <select  className="border border-black ml-2.5 w-96 gap-3 h-10 text-gray-400">
                                <option value="cat" >Choisissez votre commune de livraison</option>
                                <option value="Bandalungwa">Bandalungwa</option>
                                <option value="Barumbu">Barumbu</option>
                                <option value="Bumbu">Bumbu</option>
                                <option value="Gombe">Gombe</option>
                                <option value="Kalamu">Kalamu</option>
                                <option value="Kasa-Vubu">Kasa-Vubu</option>
                                <option value="Kimbanseke">Kimbanseke</option>
                                <option value="Kinshasa">Kinshasa</option>
                                <option value="Kintambo">Kintambo</option>
                                <option value="Kisenso">Kisenso</option>
                                <option value="Lemba">Lemba</option>
                                <option value="Limete">Limete</option>
                                <option value="Lingwala">Lingwala</option>
                                <option value="Makala">Makala</option>
                                <option value="Maluku">Maluku</option>
                                <option value="Masina">Masina</option>
                                <option value="Matete">Matete</option>
                                <option value="Mont-Ngafula">Mont-Ngafula</option>
                                <option value="Ndjili">Ndjili</option>
                                <option value="Ngaba">Ngaba</option>
                                <option value="Ngaliema">Ngaliema</option>
                                <option value="Ngiri-Ngiri">Ngiri-Ngiri</option>
                                <option value="Gombe">Nsele</option>
                                <option value="Gombe">Selembao</option>

                            </select>
                        </div>

                        {/* <div className="mb-8"><input type="select" placeholder="Mettez votre Adresse" className="border border-black ml-2.5 w-96 gap-3 h-10" /></div> */}
                        <div><input type="text" placeholder=" Indiquer votre rue de residence  ici ici" className="border border-black ml-2.5 w-96 h-10 mb-7" /></div>
                        <div><input type="text" placeholder="Telephone 1" className="border border-black ml-2.5 w-96 h-10 mb-9" /></div>
                        <div><input type="text" placeholder="Telephone 2" className="border border-black ml-2.5 w-96 h-10 mb-8" /></div>
                        <div><input type="text" placeholder="Reference" className="border border-black ml-2.5 w-96 h-10" /></div>
                    </div>
                </div>
            </form>
            <div>
                <button className="bg-[#E64C3C] rounded-xl text-white p-3 mt-8 ml-64">Enregistrer</button>
            </div>
        </div>
    )
}
export default Livraison;