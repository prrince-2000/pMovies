import React from 'react'
import './moviecard.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { category } from '../../API/tmdbApi';
import apiConfig from '../../API/apiConfig';
import {BsPlayFill} from 'react-icons/bs';

const MovieCard = props => {
    const item = props.item

    const link = '/' + category[props.category] + '/' + item.id;
    const bg =  apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
        <Link to = {link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button className='press'>
                    <BsPlayFill/>
                </Button>
            </div>
            {/* <h3>{item.title || item.name}</h3> */}
        </Link>
    )
}


export default MovieCard