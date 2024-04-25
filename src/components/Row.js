import axios from '../api/axios.js';
import React, {useEffect, useState} from 'react'
import "./Row.css";
import MovieModal from './MovieModal/index.js';
const Row = ({title, id, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] =useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log('request', request);
        setMovies(request.data.results)
    }
    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider__arrow-left'>
                    <span
                        className='arrow'
                        onClick={() => {
                            console.log(window.innerWidth)
                            document
                                .getElementById(id)
                                .scrollLeft -= window.innerWidth - 80;
                        }}>
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
                                src={`${base_url}${isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path}`}
                                onClick={() => handleClick(movie)}/>
                        ))
                    }
                </div>
                <div className='slider__arrow-right'>
                    <span
                        className='arrow'
                        onClick={() => {
                            document
                                .getElementById(id)
                                .scrollLeft += window.innerWidth - 80;
                        }}>{">"}</span>
                </div>
            </div>

            {modalOpen && (<MovieModal {...movieSelected} base_url={base_url} setModalOpen = {setModalOpen}/>)}

        </section>
    )
}

export default Row
