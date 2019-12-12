import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TablePage from '../TablePage/TablePage';
import Login from '../Login/Login';

class App extends Component {

    render() {

        return (
            <div>
                <Switch>
                    <Route path='/app' component={TablePage} />
                    <Route path='/' component={Login} />
                </Switch>
            </div>
        );
    }

}

export default App;