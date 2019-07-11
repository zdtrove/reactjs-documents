import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            { this.showContentMenus() }
                        </div>
                    </div>
                </div>
            </Router>
        );
    }

    showContentMenus = () => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={ index }
                        path={ route.path }
                        exact={ route.exact }
                        component={ route.main }
                    />
                );
            });
        }
        return <Switch>{ result }</Switch>
    }
}

export default App;