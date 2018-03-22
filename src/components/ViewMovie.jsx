import React, { Component } from 'react'
import '../css/app.css';

export default class ViewMovie extends Component {
    render(){
        return(
                <div>
                    {
                        <div key={this.props.movie.title} className="div-popular">
                            <h4>{this.props.movie.title}</h4>
                            <img className="poster-popular" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.props.movie.poster_path}`} alt="description"/>
                            <div className="description-popular">
                                <strong> {this.props.movie.overview}</strong>
                                <p>Rating:<strong> {this.props.movie.vote_average}</strong></p>
                                <p>Release date: <strong>{this.props.movie.release_date}</strong></p>
                            </div>
                        </div>
                    }
                </div>
        )
    }

}