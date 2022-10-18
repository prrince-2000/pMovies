import React from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/page-header/PageHeader';
import { category as cate} from '../API/tmdbApi';
import MovieGrid from '../components/movie-Grid/MovieGrid';

const Catalog = () => {

  const {category} = useParams();
  return (
    <>
      <PageHeader>
          {category === cate.movie ? 'Movies' : 'Tv-series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}/>
        </div>
      </div>
    </>
  )
}

export default Catalog