import React, {useEffect, useState} from "react";
import Restaurants from "./components/Restaurants";
import Commerces from "./components/Commerces";
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CafeDetails from "./Pages/commerces/cafeDetails";
import AlimentationDetails from "./Pages/restaurants/alimentationDetails";
import LibrairieDetails from "./Pages/restaurants/librairieDetails";
import PharmacieDetails from "./Pages/restaurants/pharmacieDetails";
import SoinsDetails from "./Pages/restaurants/soinsDetails";
import TextileDetails from "./Pages/restaurants/textileDetails";
import RestaurantDetails from "./Pages/commerces/restaurantDetails";
import SnackDetails from "./Pages/commerces/snackDetails";
import BoulangerieDetails from "./Pages/restaurants/boulangerieDetails";
import axios from 'axios'

export default function App() {
    function callChat() {
        window.watsonAssistantChatOptions = {
            integrationID: "5aa3d120-28e8-4025-8442-10241c07a55d", // The ID of this integration.
            region: "eu-de", // The region your integration is hosted in.
            serviceInstanceID: "f00ee0f5-6845-4d3c-9a4b-bcf1579b72ab", // The ID of your service instance.
            onLoad: function(instance) { instance.render(); }
        };
    }
    setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js"
        document.head.appendChild(t);
    }, 1000);

    const [dataRestau, setDataRestau] = useState([])
    const [dataCom, setDataCom] = useState([])

    const URL_Restau = 'https://www.odwb.be/api/records/1.0/search/?dataset=horeca&q=&lang=fr&rows=34&start=0&facet=nomenclature_de_pois'
    const URL_Com = 'https://www.odwb.be/api/records/1.0/search/?dataset=antoing-commerces&q=&lang=fr&rows=53&start=0&facet=nomenclature_de_pois'

    async function fetch(url) {
        return axios.get(url)
    }

    useEffect(() => {
        fetch(URL_Com).then(res => setDataCom(res.data.records))
        fetch(URL_Restau).then(res => setDataRestau(res.data.records))
    }, [])

    console.log('restau',dataRestau)
    console.log('com',dataCom)

    callChat();
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/commerces">
                        <Commerces />
                    </Route>
                    <Route exact path="/restaurants">
                        <Restaurants />
                    </Route>
                    <Route exact path="/cafeDetails">
                        <CafeDetails />
                    </Route>
                    <Route exact path="/restaurantDetails">
                        <RestaurantDetails />
                    </Route>
                    <Route exact path="/snackDetails">
                        <SnackDetails />
                    </Route>
                    <Route exact path="/alimentationDetails">
                        <AlimentationDetails />
                    </Route>
                    <Route exact path="/boulangerieDetails">
                        <BoulangerieDetails />
                    </Route>
                    <Route exact path="/librairieDetails">
                        <LibrairieDetails />
                    </Route>
                    <Route exact path="/pharmacieDetails">
                        <PharmacieDetails />
                    </Route>
                    <Route exact path="/soinsDetails">
                        <SoinsDetails />
                    </Route>
                    <Route exact path="/textileDetails">
                        <TextileDetails />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

