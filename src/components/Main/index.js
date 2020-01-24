import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import blog from '../../img/blog.jpg'

export default function Main(){
    return (
        <>
            <main>
                <Carousel  showStatus={false} autoPlay={true} infiniteLoop={true} showThumbs={false} >
                <div className="carrosel">
                    <img src={blog} />
                    <p className="legend">Blog</p>
                </div >
                <div className="carrosel">
                    <img src={blog} />
                    <p className="legend">Rede Social</p>
                </div>
                <div className="carrosel">
                    <img src={blog} />
                    <p className="legend">Forum</p>
                </div>
                </Carousel>
            </main>
        </>
    );
    
}
