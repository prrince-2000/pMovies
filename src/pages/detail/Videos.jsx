import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import tmdbApi from '../../API/tmdbApi';
// import apiConfig from '../../API/apiConfig';
import { useRef } from 'react';
const Videos = props => {
    const {category} = useParams();

    const [video, setItem] = useState([]);

    useEffect(()=>{
        const getVideos = async()=>{
          const response = await tmdbApi.getVideos(category, props.id);
          setItem(response.data.results.slice(0, 5));
        }
        getVideos();
    }, [category, props.id])
  return (
    <>
    {
        video.map((item, i)=>(
            <Video key={i} item={item}/>
        ))
    }
    </>
  );
}
const Video = props =>{
    const item  = props.item;
    const iframeRef = useRef(null)

    useEffect(()=>{
        const height = iframeRef.current.offsetWidth *9/16 + 'px';
        iframeRef.current.setAttribute('height', height)
    })
    return(
        <div className="video">
            <div className="video_title">
                <h2>{item.name}</h2>
            </div>
            <iframe src = {`https://youtube.com/embed/${item.key}`} ref={iframeRef} width='100%' title='video'></iframe>
        </div>
    )
}

export default Videos