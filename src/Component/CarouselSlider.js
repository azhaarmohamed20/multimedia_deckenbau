import { useEffect,useState,useRef } from "react";
import image1 from '../images/IMG_1.jpg'
import image2 from '../images/IMG_2.jpg'
import image3 from '../images/IMG_3.jpg'
import { NavLink } from "react-router-dom";

export default function CarouselSlider(){
    
    const images = [image1, image2, image3];
    const [current, setCurrent] = useState(0)

    function goToLeft(){
        setCurrent(current === 0 ? images.length -1 : current -1)
    }

    function goToRight(){
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }

    return(
        <div>
            <div className="flex items-center justify-center">
                <button onClick={goToLeft} className="p-4 bg-gray-200 rounded-full">Vorheriges</button>
                <img src={images[current]} alt="" className="w-1/2 h-1/2 object-cover" />
                <button onClick={goToRight} className="p-4 bg-gray-200 rounded-full">Nächstes</button>
            </div>

        </div>
    )

} 