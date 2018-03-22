import React, { Component } from 'react';
import axios from 'axios';

export default class Latest extends Component {
    constructor(){
        super();
        this.state = {
            movies:{},
        }
    }

    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/latest?api_key=8b41b3d690eec146c3bee8e6a7d51e50&language=en-US')
            .then((res) => {
                console.log(res);
                this.setState({
                    movies: res.data
                });
            })


    }


    render(){
        return(
            <div className="div-component">

                {
                    <div className="div-name"><h3>Name:<strong> {this.state.movies.title}</strong></h3></div>


                }
            </div>
        )
    }
}
