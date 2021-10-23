import React from 'react'
import {AiOutlineArrowLeft} from "react-icons/all"
import { BiUpArrow } from "react-icons/bi"

const RestaurantDetails = (props) => {
    const stockData = [...props.rest]
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
                    stockData.filter(rest => rest.fields.nomenclature_de_pois == "Restaurants").map((rest) => {
                        return (
                            <div className="card" key={ rest.recordid }>
                                <h2 className="title">{ rest.fields.titre }</h2>
                                <span className="iconArrow"><BiUpArrow /></span>
                                <div className="info">
                                    <p className="adresse">{ rest.fields.adresse }</p>
                                    <p className="number">{ rest.fields.numero_de_telephone }</p>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        );
    }
}

export default RestaurantDetails
