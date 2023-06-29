import CarouselSlider from "../Component/CarouselSlider"
import Homecontent from "../Component/HomeContent";
import image1 from '../images/IMG_1.jpg';
import image2 from '../images/IMG_2.jpg';
import image3 from '../images/IMG_3.jpg';

export default function Home() {
    const images = [image1, image2, image3];
    const texts = [
      "Qualität und Präzision - Ihr Partner für professionelle Deckenbau-Lösungen",
      "Maßgeschneiderte Deckenbau-Lösungen für jeden Bedarf und jedes Budget.",
      "Innovative Techniken und Materialien für einzigartige Deckenkonzepte."
    ];
  
    return (
        <>
            <div className="h-screen flex flex-col">
                <div className="grow">
                    <CarouselSlider images={images} texts={texts} />
                </div>
            </div>
            <Homecontent />
        </>
    );
  }