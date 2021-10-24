import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
import '../../assets/scss/Base.css'

const PharmacieDetails = (props) => {
    const stockData = [...props.com]
    return (
        <div>
            <span className="backArrow"><AiOutlineArrowLeft onClick={() => window.history.back()} /></span>
            <GetCardData />
        </div>
    )

    function GetCardData() {
        return (
            <div className="container">
                {
                    stockData.filter(pharma => pharma.fields.nomenclature_de_pois == "Pharmacie / bandagisterie").map((pharma) => {
                        return (
                            <div className="card" key={ pharma.recordid }>
                                <div className="group">
                                    <h2 className="title">{ pharma.fields.titre }</h2>
                                    <span className="iconArrow"><BiUpArrow /></span>
                                </div>
                                <div className="info">
                                    <p className="adresse">{ pharma.fields.adresse }</p>
                                    <p className="number">{ pharma.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default PharmacieDetails
