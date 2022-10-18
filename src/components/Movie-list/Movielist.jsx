import React, {useState, useEffect, useRef}from 'react';
import PropTypes from 'prop-types';
import tmdbApi, { category } from '../../API/tmdbApi.js';
import apiConfig from '../../API/apiConfig.js';
import './movie-list.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import MovieCard from '../movie-card/MovieCard.jsx';

const Movielist = props => {
  const [items, setItems] = useState([]);

  useEffect(() => {
      const getList  = async()=>{
        let response = null;
        const params = {};

        if(props.type !== 'similar'){
            switch(props.category){
              case category.movie:
                response = await tmdbApi.getMoviesList(props.type, {params});
                break;
              default:
                response = await tmdbApi.getTvList(props.type, {params});
            }
        } else {
          response = await tmdbApi.similar(props.category, props.id);
        }
        setItems(response.data.results);
      }
      getList();
  }, []);
  
  return (
    <div className='movie-list'>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {
          items.map((item, i) => (
            <SwiperSlide className='swiper-slide' key={i}>
               <MovieCard item={item} category={props.category}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

Movielist.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default Movielist;