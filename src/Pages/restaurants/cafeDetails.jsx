import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
import '../../assets/scss/Base.css'

const CafeDetails = (props) => {
    const stockData = [...props.rest]
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
                    stockData.filter(cafe => cafe.fields.nomenclature_de_pois == "Cafés / Brasseries").map((cafe) => {
                        return (
                            <div className="card" key={ cafe.recordid }>
                                <div className="group">
                                    <h2 className="title">{ cafe.fields.titre }</h2>
                                    <span className="iconArrow"><BiUpArrow /></span>
                                </div>
                                <div className="info">
                                    <p className="adresse">{ cafe.fields.adresse }</p>
                                    <p className="number">{ cafe.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default CafeDetails
