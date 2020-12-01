import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {Header} from "./components/header/header";
import {Home} from "./views/home/home";
import {SearchTrack} from "./views/searchTrack/searchTrack";
import {ArtistProfile} from "./views/artistProfile/artistProfile";


const Routes = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/searchTrack">
                    <SearchTrack/>
                </Route>
                <Route path="/artistInfo">
                    <ArtistProfile/>
                </Route>
                <Route path="/" exact>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes