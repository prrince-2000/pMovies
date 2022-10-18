import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import Bg from '../../assets/image1.jpg';
import logo from '../../assets/icon.png';

const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url(${Bg})`}}> 
      <div className="footer_content container">
        <div className="footer_content_logo">
          <div className="logo">
            <img src={logo} alt='logo'/>
            <Link to='/'>pMovies</Link>
          </div>
        </div>
        <div className="footer_content_menus">
          <div className="footer_content_menu">
            <Link to='/'>Home</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Terms Of Services</Link>
            <Link to='/'>About Us</Link>
          </div>
          <div className="footer_content_menu">
            <Link to='/'>Live</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Privacy Policy</Link>
          </div>
          <div className="footer_content_menu">
            <Link to='/'>Must Watch</Link>
            <Link to='/'>Recent Release</Link>
            <Link to='/'>Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer