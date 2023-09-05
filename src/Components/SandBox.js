import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import p1 from "../assests/1.png";
import p2 from "../assests/2.png";
import p3 from "../assests/3.png";
import p4 from "../assests/4.png";

function SandBox() {
  const clickHandler = () => {
    window.alert("you clicked an image");
  };
    const maxItemSize = { width: 400, height: 250 }; // Define the maximum size
  const items = [
  { src: p1, alt: 'Image 1', width: 300, height: 200 },
  { src: p2, alt: 'Image 2', width: 400, height: 250 },
  { src: p3, alt: 'Image 3', width: 806, height: 568 },
  { src: p4, alt: 'Image 4', width: 320, height: 180 },
];
  const [focus, setFocus] = useState(0);

  // Map over the items to create slides
  const slides = items.map((item, index) => {
     const isCenter = index === focus;
    const itemSize = isCenter ? maxItemSize : { width: 200, height: 150 };
     // Adjust si
      const customStyles = {
      width: `${item.width}px`,
      height: `${item.height}px`,
      // zIndex: 1, // Set the z-index
    };
    return {
      key: `item-${index}`,
      content: (
         <img style={customStyles}
        alt={item.alt}
        src={item.src}
        width={item.width}   // Set width from the item
        height={item.height} // Set height from the item
        onClick={() => clickHandler()}
      />
      )
    };
  });

  return (
    <div style={{ width: "80%", height: "300px", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={focus}
        offsetRadius={3}
        animationConfig={{}}
        showNavigation={true}
      />
      <button onClick={() => setFocus(focus - 1)}>Prev</button>
      <button onClick={() => setFocus(focus + 1)}>Next</button>
    </div>
  );
}

export default SandBox;
