import React, {Component} from 'react';
import axios from 'axios';

export default class MovieDetail extends Component {
    constructor(){
        super();
        this.state = {
            movies:{},
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        const movieId = parseInt(this.props.match.params.id, 10);
        axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=8b41b3d690eec146c3bee8e6a7d51e50&language=en-US')
            .then((res) => {
                console.log(res);
                this.setState({
                    movies: res.data
                });

            })
    }

    render() {
        return (
            <div>

                {
                    <div key={this.state.movies.title}>
                        <h4>{this.state.movies.title}</h4>
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${this.state.movies.poster_path}`} alt="description"/>
                        <div>
                            <strong> {this.state.movies.overview}</strong>
                            <p>Rating:<strong> {this.state.movies.vote_average}</strong></p>
                            <p>Release date: <strong>{this.state.movies.release_date}</strong></p>
                        </div>
                    </div>


                }
            </div>
        )
    }
}