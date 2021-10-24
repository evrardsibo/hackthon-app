import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
import '../../assets/scss/Base.css'

const TextileDetails = (props) => {
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
                    stockData.filter(textile => textile.fields.nomenclature_de_pois == "Textile / Maroquinerie").map((textile) => {
                        return (
                            <div className="card" key={ textile.recordid }>
                            <div className="group">
                                <h2 className="title">{ textile.fields.titre }</h2>
                                <span className="iconArrow"><BiUpArrow /></span>
                            </div>
                                <div className="info">
                                    <p className="adresse">{ textile.fields.adresse }</p>
                                    <p className="number">{ textile.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default TextileDetails
