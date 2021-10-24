import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"

const BoulangerieDetails = (props) => {
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
                    stockData.filter(boul => boul.fields.nomenclature_de_pois == "Boulangerie / Pâtisserie / Glacier").map((boul) => {
                        return (
                            <div className="card" key={ boul.recordid }>
                                <h2 className="title">{ boul.fields.titre }</h2>
                                <span className="iconArrow"><BiUpArrow /></span>
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
