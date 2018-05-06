import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainContainer from "./main/MainContainer";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to="/main"/>
                    )}/>
                    <Route path='/main' component={MainContainer}/>
                </Switch>
            </Router>
        );
    }
}

export default App