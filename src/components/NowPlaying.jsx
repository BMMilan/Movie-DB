import React, { Component } from 'react';
import '../css/app.css';
import ViewMovie from "./ViewMovie";

export default class Latest extends Component {
    constructor(){
        super();
        this.state={
            movies:[],
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8b41b3d690eec146c3bee8e6a7d51e50&language=en-US&page=1')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    movies:data.results
                })
            })
    }

    render() {
        return (
            <div>
                <hr/>
                <div className="div-component">
                    {
                        this.state.movies.map(movie=>(
                            <ViewMovie movie={movie} />
                        ))
                    }
                </div>
            </div>
        );
    }
}