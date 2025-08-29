import React, { useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const MyComponent: React.FC = () => {
  const images = [
    {
      original: "/condor/card1.png",
      thumbnail: "/condor/card1.png",
      width: 350,
      height: 550,
    },
    {
      original: "/condor/card2.png",
      thumbnail: "/condor/card2.png",
      width: 350,
      height: 550,
    },
    {
      original: "/condor/card3.png",
      thumbnail: "/condor/card3.png",
      width: 350,
      height: 550,
    },
    {
      original: "/condor/card4.png",
      thumbnail: "/condor/card4.png",
      width: 350,
      height: 550,
    },
  ];

  return (
    <main>
      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 p-4">
          {images.map((image, index) => (
            <div key={image.original} className="relative">
              <Item
                original={image.original}
                thumbnail={image.thumbnail}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={image.thumbnail}
                    alt={`TheCondorVision ${index + 1}`}
                    className="w-[324px] h-[420px] transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                  />
                )}
              </Item>
            </div>
          ))}
        </div>
      </Gallery>
    </main>
  );
};

export default MyComponent;
