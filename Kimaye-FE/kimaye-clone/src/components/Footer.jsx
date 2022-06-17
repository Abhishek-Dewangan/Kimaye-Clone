import React from 'react'
import styles from './styles/footer.css';
import {Route, Routes } from 'react-router-dom'

const Footer = () => {
    
  return (
    <div className='footer'>
        <div className='left'>
            <div>FAQ's</div>
            <div>Contact Us</div>
            <div>Shipping & Return Policy</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
        </div>

        <div className='right'>
            <div>Follow Us On</div>
            <div className='icon'>
                <a href='https://www.facebook.com/KimayeFruits/' target='_blank'><img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756' /></a>
                <a href='https://www.instagram.com/kimayefruits/' target='_blank'><img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756' /></a>
                <a href='https://twitter.com/kimaye_ini' target='_blank'><img src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756' /></a>
            </div>  
        </div>
        
    </div>
  )
}

export default Footer