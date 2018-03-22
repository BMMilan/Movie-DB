import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../css/app.css';
import Popular from "./Popular";
import NowPlaying from "./NowPlaying";
import Rated from "./Rated";
import Upcoming from "./Upcoming";
import Navigation from "./Navigation";
import Latest from "./Latest";

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <section>
                    <div>
                        <h1>Movies</h1>
                        <Navigation/>
                        <Switch>
                            <Route exact path='/' component={Popular} />
                            <Route  path='/rated' component={Rated} />
                            <Route  path='/nowplaying' component={NowPlaying} />
                            <Route  path='/upcoming' component={Upcoming} />
                            <Route  path='/latest' component={Latest} />
                        </Switch>
                    </div>
                </section>
            </BrowserRouter>

        )
    }
}