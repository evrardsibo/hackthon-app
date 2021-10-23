import React from "react";
import Restau from './components/Restau'
import Acceuil from './components/Acceuil'
import NavBar from './components/NavBar'
import Commerces from './components/Commerces'
import Loisir from './components/Loisir'
import Inspiration from './components/Inspiration'
import Sport from './components/Sport'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Acceuil />
                    </Route>
                    {/*<Route path="/admin">*/}
                    {/*    <Admin />*/}
                    {/*</Route>*/}
                    {/*<Route path="/discover">*/}
                    {/*    <Discover />*/}
                    {/*</Route>*/}
                    {/*<Route path="/discoverDetail/:id">*/}
                    {/*    <DiscoverDetail />*/}
                    {/*</Route>*/}
                    <Route path="/inspiration">
                        <Inspiration />
                    </Route>
                    <Route exact path="/restau">
                        <Restau />
                    </Route>
                    <Route path="/commerces">
                        <Commerces />
                    </Route>
                    <Route path="/loisir">
                        <Loisir />
                    </Route>
                    <Route path="/sport">
                        <Sport />
                    </Route>
                    {/*<Route path="/detail">*/}
                    {/*    <Detail />*/}
                    {/*</Route>*/}
                </Switch>
            </div>
        </Router>
    );
}