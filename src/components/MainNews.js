import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import image1 from '../assets/image1carousel.jpg'
import image2 from '../assets/image2carousel.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function MainNews() {
    const slides = [
        {
            image: image2,
            header: 'خلافا للاعتقاد',
            caption: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه  '
        },
        {
            image: image1,
            header: 'خلافا للاعتقاد',
            caption: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه  '
        },
        {
            image: image2,
            header: 'خلافا للاعتقاد',
            caption: 'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه '
        }    
    ];
    return (
        <div className='carousel-container'> 
            <Carousel showThumbs={false} autoPlay>
                {slides.map((slide, index) => (
                    <div className='slide' key={index}>
                        <div className="slide-image">
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                            <div className='slide-content'>
                                <h1>{slide.header}</h1>
                                <p>{slide.caption}</p>
                                <button className='carousel-btn'>المزيد</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default MainNews