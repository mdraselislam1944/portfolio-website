import React, { useState } from 'react';
import { FaFacebook, FaLinkedinIn, FaMailBulk, FaSlackHash, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content ">
            <div>
               <FaSlackHash className='h-10 w-10'/>
                <p className="font-bold">
                    Md Rasel Islam  <br />Department of Computer Science and Engineering<br/>Jahangirnagar University
                </p>
                <p>Copyright © {currentDate.getFullYear()} - All rights reserved <br />By Md Rasel Islam</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.facebook.com/mdrasel.islam.5492216'><FaFacebook className='h-8 w-8'/></Link>
                    <Link to='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQZwCgMmlSLCRSMjVgHnFWlKnfFcRGWKfTCknVxWQSWVwtsTKltZRNWsKjFRWBsZLVLVSG'><FaMailBulk className='h-8 w-8'/></Link>
                    <Link to='https://www.linkedin.com/in/md-rasel-islam-6a56a6280/'><FaLinkedinIn className='h-8 w-8'/></Link>
                    <Link to='https://twitter.com/rasel_isla3026'><FaTwitter className='h-8 w-8'/></Link>
                    <Link to='https://www.youtube.com/@mdraselislam4327'><FaYoutube className='h-8 w-8'/></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;








