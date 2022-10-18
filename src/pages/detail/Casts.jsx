import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import tmdbApi from '../../API/tmdbApi';
import apiConfig from '../../API/apiConfig';

const Casts = props => {

    const {category} = useParams();

    const [casts, setItem] = useState([]);

    useEffect(()=>{
        const getCredits = async()=>{
          const response = await tmdbApi.credits(category, props.id);
          setItem(response.data.cast.slice(0, 5));
        }
        getCredits();
    }, [category, props.id])
  return (
    <div className='casts'>
        {
            casts.map((item, i)=>(
                <div key={i} className="casts_item">
                    <div className="casts_item_img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                    <p className="cast_item_name">{item.name}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Casts