import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";

export default function CarouselSlider({ images, texts }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("carousel-container");
      if (container) {
        container.style.height = `${window.innerHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentText = texts[currentImageIndex];

  return (
    <div
      id="carousel-container"
      className="absolute top-0 left-0 right-0 z-10 overflow-hidden"
      style={{
        height: `${window.innerHeight}px`,
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none"
        onClick={prevImage}
      >
        <ChevronLeftIcon className="h-8 w-8 text-white" />
      </button>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none"
        onClick={nextImage}
      >
        <ChevronRightIcon className="h-8 w-8 text-white" />
      </button>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-white font-bold text-[40px]">{currentText}</p>
        <Link to="/ueberuns">
            <button className="bg-white text-black px-4 py-2 mt-4 rounded-xl">Learn More</button>
        </Link>
    </div>

    </div>
  );
}
