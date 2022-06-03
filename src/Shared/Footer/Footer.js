import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='text-center footer bg-black text-white mt-5'>
            <div>Copyright &#169; {(new Date().getFullYear())}  All rights reserved</div>
        </div>
    );
};

export default Footer;