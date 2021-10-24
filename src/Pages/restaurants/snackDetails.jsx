import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
import '../../assets/scss/Base.css'

const SnackDetails = (props) => {
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
                    stockData.filter(snack => snack.fields.nomenclature_de_pois == "Snacks / Friteries").map((snack) => {
                        return (
                            <div className="card" key={ snack.recordid }>
                                <div className="group">
                                    <h2 className="title">{ snack.fields.titre }</h2>
                                    <span className="iconArrow"><BiUpArrow /></span>
                                </div>
                                <div className="info">
                                    <p className="adresse">{ snack.fields.adresse }</p>
                                    <p className="number">{ snack.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default SnackDetails
