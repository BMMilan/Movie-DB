import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../css/app.css';
import Popular from "./Popular";
import NowPlaying from "./NowPlaying";
import Rated from "./Rated";
import Upcoming from "./Upcoming";
import Navigation from "./Navigation";
import Latest from "./Latest";
import MovieDetail from "./MovieDetail";

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <section>
                    <div>
                        <h1><strong>Movies</strong></h1>
                        <Navigation/>
                        <Switch>
                            <Route exact path='/' component={Popular} />
                            <Route  path='/rated' component={Rated} />
                            <Route  path='/nowplaying' component={NowPlaying} />
                            <Route  path='/upcoming' component={Upcoming} />
                            <Route  path='/latest' component={Latest} />
                            <Route  path='/moviedetail/:id' component={MovieDetail}/>
                        </Switch>
                    </div>
                </section>
            </BrowserRouter>

        )
    }
}