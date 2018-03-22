import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/app.css';

export default class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                <Nav>
                    <LinkContainer to="/">
                        <NavItem title="Popular Movie">
                            <button className="btn btn-success mr-4">Popular Movie</button>
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/rated">
                        <NavItem title="Rated Movie">
                            <button className="btn btn-success mr-4">Rated Movie</button>
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/nowplaying">
                    <NavItem title="Now Playing Movie">
                        <button className="btn btn-success mr-4">Now Playing Movie</button>
                    </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/upcoming" >
                    <NavItem title="Upcoming Movie">
                        <button className="btn btn-success mr-4">Upcoming Movie</button>
                    </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/latest" >
                    <NavItem title="Latest Movie">
                        <button className="btn btn-success mr-4">Latest Movie</button>
                    </NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        )
    }
}