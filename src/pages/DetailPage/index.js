import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from '../../api/axios'
export default function DetailPage() {
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});
    console.log(movieId);
    async function fetchData() {
        const request = await axios.get(`/movie/${movieId}`);
        console.log(request);
        setMovie(request.data);
    }
    useEffect(() => {
        fetchData();
    }, [movieId]);

    if(!movie) return null;
    else{ 
      return (
          <section>
            <p style={{"color": "white"}}>{movie.original_title}</p>
              <img className='modal__poster-img' src={`https://images.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title}></img>
          </section>
      )
    }
}
