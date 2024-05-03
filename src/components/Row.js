import axios from '../api/axios.js';
import React, {useEffect, useState} from 'react'
import "./Row.css";
import MovieModal from './MovieModal/index.js';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Row({title, id, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState([]);
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
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]} /*spaceBetween={50}*/ slidesPerView={5} navigation={{ // 객체로 변경
                    nextEl: '.swiper-button-next', // 다음 버튼 클래스 지정
                    prevEl: '.swiper-button-prev', // 이전 버튼 클래스 지정
                }}
                /*pagination={{
                clickable: true
                }}*/
                scrollbar={{
                    draggable: true
                }} loop={true}
                breakpoints={{
                    1500: {
                        slidesPerView:10,
                        slidesPerGroup:10,
                    },
                    1378: {
                        slidesPerView:6,
                        slidesPerGroup:6,
                    },
                    998: {
                        slidesPerView:5,
                        slidesPerGroup:5,
                    },
                    625:{
                        slidesPerView:4,
                        slidesPerGroup:4,
                    },
                    0:{
                        slidesPerView:3,
                        slidesPerGroup:3,
                    }
                }}
                onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log('slide change')}>
                <div id={id} className='row__posters'>
                    {
                        movies.map(movie => (
                            <SwiperSlide key={movie.id}>
                                <img
                                    alt={movie.name}
                                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                                    src={`${base_url}${isLargeRow
                                        ? movie.poster_path
                                        : movie.backdrop_path}`}
                                    onClick={() => handleClick(movie)}/>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>

            {
                modalOpen && (
                    <MovieModal {...movieSelected} base_url={base_url} setModalOpen={setModalOpen}/>
                )
            }

        </section>
    )
}