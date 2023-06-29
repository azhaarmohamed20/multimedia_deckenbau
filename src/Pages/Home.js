import CarouselSlider from "../Component/CarouselSlider"
import image1 from '../images/IMG_1.jpg';
import image2 from '../images/IMG_2.jpg';
import image3 from '../images/IMG_3.jpg';

export default function Home(){

    const images =[image1, image2, image3]
    const texts = [
        "Qualität und Präzision - Ihr Partner für professionelle Deckenbau-Lösungen", 
        "Maßgeschneiderte Deckenbau-Lösungen für jeden Bedarf und jedes Budget.", 
        "Innovative Techniken und Materialien für einzigartige Deckenkonzepte."];
    return(
        <>
        <CarouselSlider images={images} texts={texts}/>
        </>
    )
}