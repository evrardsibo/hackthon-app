import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
import '../../assets/scss/Base.css'

const SoinsDetails = (props) => {
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
                    stockData.filter(soins => soins.fields.nomenclature_de_pois == "Soins du corps / Institut de beauté").map((soins) => {
                        return (
                            <div className="card" key={ soins.recordid }>
                                <div className="group">
                                    <h2 className="title">{ soins.fields.titre }</h2>
                                    <span className="iconArrow"><BiUpArrow /></span>
                                </div>
                                <div className="info">
                                    <p className="adresse">{ soins.fields.adresse }</p>
                                    <p className="number">{ soins.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default SoinsDetails
