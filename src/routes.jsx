import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {Home} from "./views/home/home";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            {/*<Footer/>*/}
        </Router>
    )
}

export default Routes