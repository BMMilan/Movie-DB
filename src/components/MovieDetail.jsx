import React, {Component} from 'react';
import axios from 'axios';
import '../css/movie.css';

export default class MovieDetail extends Component {
    constructor(){
        super();
        this.state = {
            movies:{},
            movie:[],
            company:[],
            country:[],
            language:[],
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        const movieId = parseInt(this.props.match.params.id, 10);
        axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=8b41b3d690eec146c3bee8e6a7d51e50&language=en-US')
            .then((res) => {
                console.log("movie",res.data);
                this.setState({
                    movies: res.data,
                    movie: res.data.genres,
                    company: res.data.production_companies,
                    country: res.data.production_countries,
                    language: res.data.spoken_languages,
                });

            })
    }

    render() {
        return (
            <div className="div-movie">
                <hr/>
                {
                        <div key={this.state.movies.title} className="movie">
                            <img className="picture-movie" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.state.movies.poster_path}`} alt="description"/>
                            <h4 className="title">{this.state.movies.title}</h4>
                            <div className="description">
                                <h4><strong> {this.state.movies.overview}</strong></h4>
                                <h3>Rating:<strong> {this.state.movies.vote_average}</strong></h3>
                                <h3>Release date: <strong>{this.state.movies.release_date}</strong></h3>
                                <h3>Genre: </h3>
                                {
                                    this.state.movie.map(genre => (
                                    <h3 className="genre-p"><strong> -{genre.name}</strong></h3>
                                ))}
                                <h3> Production Company: </h3>
                                {
                                    this.state.company.map(company => (
                                        <h3 className="genre-p"><strong> -{company.name}</strong></h3>
                                    ))
                                }
                                <h3> Production Country: </h3>
                                {
                                    this.state.country.map(country => (
                                        <h3 className="genre-p"><strong>{country.name}</strong></h3>
                                    ))
                                }
                                <h3> Language: </h3>
                                {
                                    this.state.language.map(language => (
                                        <h3 className="genre-p"><strong>{language.name}</strong></h3>
                                    ))
                                }
                            </div>
                        </div>

                }
            </div>
        )
    }
}