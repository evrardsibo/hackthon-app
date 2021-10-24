import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"

const AlimentationDetails = (props) => {
    const stockData = [...props.com]
    return (
        <div>
            <AiOutlineArrowLeft onClick={() => window.history.back()} />
            <GetCardData />
        </div>
    )

    function GetCardData() {
        return (
            <div className="container">
                {
                    stockData.filter(alim => alim.fields.nomenclature_de_pois == "Alimentation / Car drink").map((alim) => {
                        return (
                            <div className="card" key={ alim.recordid }>
                                <h2 className="title">{ alim.fields.titre }</h2>
                                <span className="iconArrow"><BiUpArrow /></span>
                                <div className="info">
                                    <p className="adresse">{ alim.fields.adresse }</p>
                                    <p className="number">{ alim.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default AlimentationDetails
