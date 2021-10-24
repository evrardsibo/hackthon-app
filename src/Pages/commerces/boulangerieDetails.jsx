import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
import '../../assets/scss/Base.css'

const BoulangerieDetails = (props) => {
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
                    stockData.filter(boul => boul.fields.nomenclature_de_pois == "Boulangerie / Pâtisserie / Glacier").map((boul) => {
                        return (
                            <div className="card" key={ boul.recordid }>
                                <div className="group">
                                    <h2 className="title">{ boul.fields.titre }</h2>
                                    <span className="iconArrow"><BiUpArrow /></span>
                                </div>
                                <div className="info">
                                    <p className="adresse">{ boul.fields.adresse }</p>
                                    <p className="number">{ boul.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default BoulangerieDetails
