import { useEffect,useState,useRef } from "react";
import image1 from '../images/IMG_1.jpg'
import image2 from '../images/IMG_2.jpg'
import image3 from '../images/IMG_3.jpg'
import { NavLink } from "react-router-dom";

export default function CarouselSlider(){
    
const images = [image1, image2, image3];
const [currentImageIndex, setCurrentImageIndex] = useState(0);

const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
};

const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
};

return (
    <div className="max-w-lg mx-auto">
      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full px-4 py-2"
          onClick={previousSlide}
        >
          Previous
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Slider"
          className="w-full rounded-lg"
        />
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 text-gray-700 rounded-full px-4 py-2"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
    )
} 