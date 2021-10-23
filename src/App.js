import React from "react";
import Restaurants from "./components/Restaurants";
import Commerces from "./components/Commerces";
import Home from "./components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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

    callChat();
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

