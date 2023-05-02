import React from 'react'
import { Link } from "react-router-dom"
import './Footer.css'
import { FaCcVisa , FaCcMastercard , FaCcPaypal , FaMapMarkerAlt , FaPhoneAlt , FaEnvelope , FaCcAmazonPay} from 'react-icons/fa';
import { BsTwitter , BsFacebook , BsLinkedin , BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
            {/* <div class="container">
  <footer class="py-3 my-4 ">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <Link to='/' className=''><li class="nav-item"><a href="#" class="nav-link px-2 ">Home</a></li></Link>
    <Link to='/shop' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Shop</a></li></Link>
    <Link to='/media' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Media</a></li></Link>
    <Link to='/blog' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Blog</a></li></Link>
    <Link to='/contact' className=''><li class="nav-item"><a href="" class="nav-link px-2 ">Contact</a></li></Link>
    </ul>
    <p class="text-center text-muted">&copy; 2022 Footflops, Inc</p>
  </footer>
            </div> */}


            <footer className="footer-distributed">
        <div className="footer-left">
          <Link to='/'>
            {/* <img  src="./image/logo.png"/> */}
            <p style={{fontSize:"34px"}}>TRENDY MART</p>
            </Link>
          <p className="footer-links">
            <Link to='/' className=''>HOME</Link>
            <Link to='/shop' className=''>ITEMS</Link>
            <Link to='/media' className=''>Media</Link>
            <Link to='/blog' className=''>Blog</Link>
            <Link to='/contact' className=''>Contact</Link>
          </p>
          <p class="text-muted" style={{color:"rgb(25, 25, 109);"}}>&copy; 2023 TRENDY MART, Inc</p>

        </div>
        <div className="footer-center">
          <div>
            <FaMapMarkerAlt style={{color: ' rgb(25, 25, 109)' , marginRight: '8px'  , marginBottom: '20px' }} />
            <p><span>441 Cedros Ave</span> Solana Beach, California</p>
          </div>
          <div>
            <FaPhoneAlt style={{color: ' rgb(25, 25, 109)' , marginRight: '8px'}} />
            <p>+91-9123547878</p>
          </div>
          <div>
            <FaEnvelope style={{color: ' rgb(25, 25, 109)' , marginRight: '8px' }}/>
            <p><a href="mailto:dharagabani@gmail.com" style={{color: 'rgb(25, 25, 109)'}}>dharagabani@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-right">
          <p style={{ color: " rgb(25, 25, 109)"}} className="footer-company-about">
            <span>About the company</span>
            E-commerce  is the buying and selling of goods and services, or the transmitting of funds or data, over an shoes network, primarily the internet.
          </p>
          <div className="footer-icons">
            <a href="#"><FaCcMastercard/></a>
            <a href="#"><FaCcVisa/></a>
            <a href="#"><FaCcPaypal/></a>
            <a href="#"><FaCcAmazonPay/></a>
          </div>
        </div>
      </footer>

      
    </>
  )
}

export default Footer