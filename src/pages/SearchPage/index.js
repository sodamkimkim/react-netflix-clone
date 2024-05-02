import axios from '../../api/axios';
import React, {useState, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import '../SearchPage/SearchPage.css';
import useDebounce from '../../hooks/useDebounce';
export default function SearchPage() {
    // console.log('useLocation', useLocation());
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q");
    const deboucedSearchTerm = useDebounce(searchTerm, 500); 
    useEffect(() => {
        if (deboucedSearchTerm) {
            fetchSearchMovie(deboucedSearchTerm);
        }
    }, [deboucedSearchTerm]);
    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            );
            console.log(request);
            setSearchResults(request.data.results);
        } catch (error) {
            console.log("error", error);
        }
    };
    const renderSearchResults = () => {
        return searchResults.length > 0
            ? (
                <section className='search-container'>
                    {
                        searchResults.map((movie, index) => {
                            if (movie.backdrop_path !== null && movie.media_type !== "person") {
                                const movieImageUrl = "https://images.tmdb.org/t/p/w500" + movie.backdrop_path
                                return (
                                    <div className='movie' key={index} onClick={()=>navigate(`/${movie.id}`)}>
                                        <div className='movie__column-poster'>
                                            <img src={movieImageUrl} alt="movie" className='movie__poster'></img>
                                        </div> 
                                    </div>
                                )
                            }
                        })
                    }
                </section>
            )
            : (
                <section className='no-results'>
                    <div className='no-results__text'>
                        <p>
                            찾고자하는 검색어 "{deboucedSearchTerm}"에 맞는 영화가 없습니다.
                        </p>
                    </div>
                </section>
            )
    }
    return  renderSearchResults();
}