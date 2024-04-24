import axios from '../api/axios.js';
import React, {useEffect, useState} from 'react'
import "./Row.css";
const Row = ({title, id, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovieData();
    }, []);
    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log('request', request);
        setMovies(request.data.results);
    }

    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider__arrow-left'>
                    <span className='arrow'>
                        {"<"}
                    </span>
                </div>
                <div id={id} className='row__posters'>
                    {
                        movies.map(movie => (
                            <img
                                alt={movie.name}
                                key={movie.id}
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                src={`https://image.tmdb.org/t/p/original${isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path}`}/>
                        ))
                    }
                </div>
            </div>
            <div className='slider__arrow-right'>
                    <span className='arrow'>{">"}</span>
            </div>
        </section>
    )
}

export default Row
