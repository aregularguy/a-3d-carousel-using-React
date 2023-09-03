import React, { useState } from 'react';
import p1 from "../assests/1.png"
import p2 from "../assests/2.png"
import p3 from "../assests/3.png"
import p4 from "../assests/4.png"
import "../Styles/Carousel.css"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        p1, p2, p3, p4
    ];

    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    const nextIndex = (currentIndex + 1) % images.length;

    const rotateCarousel = (index) => {
        setCurrentIndex(index);
    }

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => rotateCarousel(index)}
                    >
                        <img
                            src={item}
                            alt={`Item ${index + 1}`}
                            style={{
                                minWidth: '10%',
                                minHeight: '10%',
                                margin: '0 auto', // Center the image horizontally
                                display: 'block', // Remove extra space below the image
                            }}
                        />
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={() => rotateCarousel(prevIndex)}>
                Prev
            </button>
            <button className="next-button" onClick={() => rotateCarousel(nextIndex)}>
                Next
            </button>
        </div>
    );
}

export default Carousel;
