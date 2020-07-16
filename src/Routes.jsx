import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from 'react-router-dom';
import Home from './pages/home/Home';
import Chat from './pages/chat/Chat.jsx';

const Routes = () => {

    const history = useHistory();

    return (
        <Router>
            <Switch history={history}>
                <Route exact path='/' component={Home}/>
                <Route exact path='/chat' component={Chat}/>
            </Switch>
        </Router>
    )
};

export default Routes;