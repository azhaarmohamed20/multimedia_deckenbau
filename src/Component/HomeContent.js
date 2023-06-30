import image1 from '../images/IMG_0043.JPG';
import image2 from '../images/IMG_0118.JPG';
import image3 from '../images/IMG_0119.JPG';
import image4 from '../images/IMG_0102.JPG';
import image5 from '../images/IMG_0100.JPG';
import image6 from '../images/IMG_0094.JPG';
import { Link } from "react-router-dom";

export default function Homecontent(){
    return(
        <>
            <div className="bg-white z-30 relative m-auto ">
                <h1 className="font-bold text-[30px] text-center">
                Der Kompetente Partner für Ihr Bauvorhaben
                </h1>
                <br></br>
                <p className="m-auto text-center w-[60%] text-[20px]">
                Wir stehen für unsere Kunden mit Fachwissen, Engagement und Erfahrung zur Seite. Ebenso beraten und unterstützen wir Sie in Ihrer Planung bis zur Fertigstellung. Die Montage erfolgt durch fachlich qualifizierte und geschulte Mitarbeiter. Projektbezogen können wir ein optimales Team aus Fachleuten zusammenstellen.
                </p>
                <br />
                <p className="m-auto text-center w-[60%] text-[20px]">
                Als Dienstleistungs- und Montageunternehmen haben wir ausschließlich den Erfolg Ihres Projektes im Fokus.
                </p>
                <br></br>
                <br></br>
            </div>
            <br></br>
            <div className=' flex flex-row gap-[3.4vw] w-[100%] m-auto'>
                <img src={image1} alt="Image 2" className="w-[31%]" />
                <img src={image3} alt="Image 2" className="w-[31%]" />
                <img src={image6} alt="Image 2" className="w-[31%]" />
            </div>
            <br></br>
            <p className="m-auto text-center w-[60%] text-[20px] mt-[2%]" >
                Unser Kernteam besteht aus erfarhenen, innovativen und fähigen Mitarbeitern
            </p>
            <br></br>
            <br></br>
            <div className='bg-gray-400 h-[40vh] '>
                <h1 className='pt-10 text-center text-[50px] font-bold'>1000</h1>
                <p  className='pt-5 text-center text-[28px]'>Über 1000 Grosse und Kleine Aufträge erfolgreich abgeschlossen</p>
            </div>
            <br></br>
            <br></br>
            <div className='flex flex-row m-auto w-[60%] gap-[3vw] pb-10'>
                <div className=''>
                    <h1 className='text-center font-bold text-[50px]'>Einblicke</h1>
                    <p className='text-center  text-[20px]'>
                        Zufriedene Kunden sind die besten Referenzen. Wir behandeln unsere Kunden einzigartig, beraten und bieten eine individuelle Konzeptplanung für jedes Projekt <br></br> bis hin zur Umsetzung an  alles aus einer Hand.
                        Nachfolgend finden Sie aktuelle Referenzprojekte
                    </p>
                    <Link to="/ueberuns" className='flex justify-center'>
                        <button className="bg-gray-400 text-black px-4 py-2 mt-4 rounded-xl ">Learn More</button>
                    </Link>
                </div>
                <div className='m-auto w-screen '>
                    <img src={image2} alt="Image 2" className="w-screen" />
                </div>
                <br></br>
            </div>
        </>
    )
}