import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"

const LibrairieDetails = (props) => {
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
                    stockData.filter(lib => lib.fields.nomenclature_de_pois == "Librairie / papeterie").map((lib) => {
                        return (
                            <div className="card" key={ lib.recordid }>
                                <h2 className="title">{ lib.fields.titre }</h2>
                                <span className="iconArrow"><BiUpArrow /></span>
                                <div className="info">
                                    <p className="adresse">{ lib.fields.adresse }</p>
                                    <p className="number">{ lib.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default LibrairieDetails
