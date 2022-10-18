import React, { useEffect, useState, useRef } from 'react';
import tmdbApi, {category, movieType}from '../../API/tmdbApi';
import Button, {OutlineButton} from '../button/Button';
import apiConfig from '../../API/apiConfig';
import './hero-slide.css';
import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import Modal, {ModalContent} from '../modal/Modal.jsx';

const Heroslide = () => {

  SwiperCore.use([Autoplay]);
    const [movieItems, setMovieItems] = useState([]);
   
    useEffect(() => {
      const getMovies = async () => {
          const params = {page: 1}
          try{
              const response = await tmdbApi.getMoviesList(movieType.popular, {params});
              setMovieItems(response.data.results.slice(0, 5));
              console.log(response);
          } catch {
              console.log('error');
          }
      }
      getMovies();
  }, []);

  return (
    <div className='hero-slide'>
        <Swiper modules={[Autoplay]} grabCursor={false} loop={true} spaceBetween={0} slidesPerView={1}
        autoplay={{"delay": 3000, "disableOnInteraction": false}}
        >
            {
              movieItems.map((item, i)=>(
                <SwiperSlide key={i}>
                    {({isActive})=>(
                      <HeroslideItem item={item} className={`${isActive? 'active': ''}`}/>
                    )}
                </SwiperSlide>
              ))
            }
        </Swiper>
        {
          movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
        }
    </div>
  )
}

const HeroslideItem = props =>{
  let history = useHistory();
  const item = props.item;

  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  const setModalActive = async () =>{
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if(videos.data.results.lengths > 0){
      const videoSrc = `https://www.youtube.com/embed/` + videos.data.results[0].key;
      modal.querySelector('.modal_content > iframe').setAttribute('src', videoSrc);
    }else{
      modal.querySelector('.modal_content').innerHTML = 'No Thrailer';
    }

    modal.classList.toggle('active');
  }

  return(
    <div
      className={`hero-slide_item ${props.className}`}
      style={{backgroundImage: `url(${background})`}}
    >
      <div className="hero-slide_item_content content">
        <div className="hero-slide_item_content_info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
              <Button onClick={()=>history.push('/movie/' + item.id)}>
                  Watch Now.
              </Button>
              <OutlineButton onClick={setModalActive}>
                  Watch Trailer.
                  {console.log(setModalActive)}
              </OutlineButton>
          </div>
        </div>
        <div className="hero-slide_item_content_poster">
          <img className = "poster" src= {apiConfig.w500Image(item.poster_path)} alt=''/>
        </div>
      </div>
    </div>
  )
}

const TrailerModal = props =>{
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return(
    <Modal active={false} id={`modal_${item.id}`}>
        <ModalContent onClose={onClose}>
          <iframe ref={iframeRef} width='100%' height='500px' title='trailer'></iframe>
        </ModalContent>
    </Modal>
  )
}

export default Heroslide;