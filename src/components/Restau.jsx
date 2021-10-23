import axios from 'axios'
import { useEffect } from 'react'

export default function Restau() {
    const URL = 'https://www.odwb.be/explore/dataset/horeca/api/?lang=fr&start=0#:~:text=/api/records/1.0/search/%3Fdataset%3Dhoreca%26q%3D%26lang%3Dfr%26start%3D0%26facet%3Dnomenclature_de_pois'

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