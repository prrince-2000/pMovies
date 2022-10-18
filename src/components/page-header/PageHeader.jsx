import React from 'react';
import './page-header.css';
import Bg from '../../assets/image1.jpg';
const PageHeader = props => {
  return (
    <div className='page-header' style={{backgroundImage: `url(${Bg})`}}>
        <h2>{props.children}</h2>
    </div>
  )
}

export default PageHeader