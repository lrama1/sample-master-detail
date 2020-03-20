import React from 'react';
import {HashRouter, Route, Link } from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import VehicleListContainer from '../containers/VehicleListContainer';
import VehicleEditContainer from '../containers/VehicleEditContainer';
import Home from './Home';


function App(props){

    return(
    	<HashRouter>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link> <span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles" onClick={() => props.fetchAllVehicles('vehicles?page=1&per_page=10')}>Vehicles</Link>
                            </li>                            
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-xs-12">
                        <Route path="/" exact component={Home} />
                        <Route path="/vehicles" exact component={VehicleListContainer} />
                        <Route path="/vehicle" exact component={VehicleEditContainer} />
                    </div>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
