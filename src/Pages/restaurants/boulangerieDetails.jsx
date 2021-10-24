import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"
<<<<<<< HEAD:src/Pages/restaurants/boulangerieDetails.jsx
=======
import '../../assets/scss/Base.css'
>>>>>>> 87bb41702eb2b02c0c68d6f3fda481a3f963c01e:src/Pages/commerces/boulangerieDetails.jsx

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
            <div className="container">
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
