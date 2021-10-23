import axios from 'axios'
import { useEffect } from 'react'

export default function Restau() {
    const URL = 'https://www.odwb.be/api/records/1.0/search/?dataset=horeca&q=&lang=fr&rows=34&facet=nomenclature_de_pois'

    async function fetch() {
        return await axios.get(URL)
    }

    useEffect(() => {
        fetch().then(res => {
            console.log(res)
        })
    }, [])

    return (
        <div>
            <h2>Restaurant</h2>
        </div>
    )
}