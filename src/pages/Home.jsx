import React from 'react';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/button/Button';
import Heroslide from '../components/hero-slide/Hero-slide';
import Movielist from '../components/Movie-list/Movielist';
import {category, movieType, tvType} from '../API/tmdbApi';
const Home = () => {
  return (
    <>
      <Heroslide/>
      <div className="container">
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending Movies</h2>
            <Link to = '/movie'>
              <OutlineButton className='small'>View More</OutlineButton>
            </Link>
          </div>
          <Movielist category={category.movie} type={movieType.popular}/>
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to = '/movie'>
              <OutlineButton className='small'>View More</OutlineButton>
            </Link>
          </div>
          <Movielist category={category.movie} type={movieType.top_rated}/>
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Trending TV</h2>
            <Link to = '/tv'>
              <OutlineButton className='small'>View More</OutlineButton>
            </Link>
          </div>
          <Movielist category={category.tv} type={tvType.popular}/>
        </div>
        <div className="section mb-3">
          <div className="section_header mb-2">
            <h2>Top Rated TV</h2>
            <Link to = '/tv'>
              <OutlineButton className='small'>View More</OutlineButton>
            </Link>
          </div>
          <Movielist category={category.tv} type={tvType.top_rated}/>
        </div>
      </div>
    </>
  )
}

export default Home