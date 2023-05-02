import React from 'react'
import './ProductSlider.css'

const ProductSlider = () => {
  
    
    return (
    

    <>
            <div className="container1">
                <div className="grid grid-four-coloum-discount">
                    <div className=' discount-box text-1'>
                        <img src="./image/cms_banner_01.jpg" alt="" />
                        <p>Men's watches combo</p>
                        {/* <span>get upto 30 % off </span> */}
                    </div>
                    <div className='discount-box text-2'>
                        <img className="image1" src="./image/cms_banner_02.jpg" alt="" />
                        <p style={{textAlign:"center"}}>Cotton Checkered <br/>Slim fit Casual Shirt<br/> for Men</p>
                        <span></span>
                    </div>
                    <div className='discount-box text-1'>
                        <img src="https://images.pexels.com/photos/691046/pexels-photo-691046.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <p style={{textAlign:"center"}}>Real Diamond Like <br/> RINGS </p>
                        <span></span>
                    </div>
                    <div className='discount-box text-1'>
                        <img className="image2"src="./image/cms_banner_03.jpg" alt="" />
                        <p>Makeup Kits</p>
                        {/* <span>Women's Classic Shoes</span> */}
                    </div>
                </div>
            </div>
    
           

            	
    </>
  )
}

export default ProductSlider
