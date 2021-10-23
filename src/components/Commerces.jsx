import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../assets/scss/Commerces.css'
import '../assets/scss/Base.css'

const Commerces = () => {
    const [getData, setGetData] = useState([]);
    const URL = 'https://www.odwb.be/api/records/1.0/search/?dataset=antoing-commerces&q=&lang=fr&rows=53&start=0&facet=nomenclature_de_pois';

    async function fetc() {
        return await axios.get(URL);
    }
    useEffect(() => {
        fetc().then(res => {
            setGetData(res.data.records)
            console.log(res.data.records)
        })
    }, [])


    return (
        <>
            <GenerateCard />
        </>
    )

    function GenerateCard() {
        return (
            <div className="commerceContainer">
            {
                getData.map((commerce) => {
                    return (
                    <div className="commerceCard" key={ commerce.recordid }>
                        <h2 className="title">{ commerce.fields.titre }</h2>
                        <a href={ commerce.fields.site_internet } target="_blank">lien vers le site</a>
                        <p className="phone">{ commerce.fields.numero_de_telephone }</p>
                    </div>
                    );
                })
            }
        </div>
        )
    }
}

export default Commerces
