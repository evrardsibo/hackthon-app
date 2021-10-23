import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Commerces = () => {
    const [getData, setGetData] = useState([]);
    const URL = 'https://www.odwb.be/api/records/1.0/search/?dataset=antoing-commerces&q=&lang=fr&rows=53&start=0&facet=nomenclature_de_pois';

    async function fetc() {
        return await axios.get(URL);
    }
    useEffect(() => {
        fetc().then(res => {
            console.log(res.data.records)
        })
    }, [])


    return (
        <div>
            
        </div>
    )
}

export default Commerces
