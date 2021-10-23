import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Sport = () => {
    const [getData, setGetData] = useState([])
    const URL = 'https://www.odwb.be/api/records/1.0/search/?dataset=antoing-sports&q=&lang=fr&rows=15&facet=nomenclature_de_pois'

    async function fetch() {
        return await axios.get(URL)
    }
    useEffect(() => {
        fetch().then(res => {
            setGetData(res.data)
            console.log(res.data);
        })
    }, [])

    return (
        <main>
            <h2>Sport</h2>
        </main>
    )
}

export default Sport
