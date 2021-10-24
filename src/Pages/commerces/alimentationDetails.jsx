import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
import '../../assets/scss/Base.css'

const AlimentationDetails = (props) => {
    const stockData = [...props.com]
    return (
        <div>
            <span className="backArrow"><AiOutlineArrowLeft onClick={() => window.history.back()} /></span>
            <GetCardData />
        </div>
    )

    function GetCardData() {
        return (
            <div className="containerDetails">
                {
                    stockData.filter(alim => alim.fields.nomenclature_de_pois == "Alimentation / Car drink").map((alim) => {
                        return (
                            <div className="card" key={ alim.recordid }>
                                <div className="group">
                                    <h2 className="title">{ alim.fields.titre }</h2>
                                    <span className="iconArrow"><BiUpArrow /></span>
                                </div>
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
