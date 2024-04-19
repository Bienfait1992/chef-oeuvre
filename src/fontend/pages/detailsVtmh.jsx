import React from "react";
import { DataVtmh } from "../datas/data_vetementH/data_vetementH";





function DetailsVth() {
    return (
        <div>
            {
                DataVtmh.map((element) => (
                    <>
                        <div>
                            <div><img src="{element.avatar2}" alt="" /></div>
                            <div><img src="{element.avatar3}" alt="" /></div>
                            <div><img src="{element.avatar4}" alt="" /></div>
                        </div>
                        <div><img src="{element.avatar1}" alt="" /></div>
                    </>
                ))

            }


        </div>
    )
}
export default DetailsVth;