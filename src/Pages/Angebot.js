import image4 from '../images/IMG_0087.JPG';
import image5 from '../images/IMG_0091.JPG';
import image6 from '../images/IMG_0077.JPG';
import image7 from '../images/IMG_0071.JPG';

export default function Angebot() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden h-[60vh] ">
        <img src={image4} alt="Header" className="w-full h-auto object-cover object-center" />
      </div>
      <div className="p-auto relative m-auto w-[85%] bg-white z-20 mt-[28%] text-center pb-[5%]">
        <br></br>
        <h1 className='font-bold text-[40px]'>Montageprofis in jeder Situation </h1>
        <br></br>
        <div className="flex flex-row gap-[2vw]  m-auto">
            <div className="p-5 ">
              <img src={image5} alt="Image 1" className="w-[500px]" />
              <p className='m-auto text-[24px] font-bold' >Metalldecken</p>
            </div>
          
            <div className="p-5">
              <img src={image6} alt="Image 2" className="w-[500px]" />
              <p className='m-auto text-[24px] font-bold' >Akustik</p>
            </div>

            <div className="p-5">
              <img src={image7} alt="Image 3" className="w-[500px]" />
              <p className='m-auto text-[24px] font-bold' >Beleuchtung</p>
            </div>
        </div>
        <br></br>
        <p className='m-auto text-[24px]' >
            Unser Leistungsspektrum umfasst eine präzise Montage aller Decken- und Akustiksysteme. Ausserdem sind wir spezialisiert für die Demontage, Wiedermontage und Anpassung bestehender Deckenbekleidungen, bei einer Änderung der Raumstruktur und bei der Optimierung von Einbaukomponenten wie z.B. Beleuchtungen, Klimaanlagen usw.
        </p>
      </div>
    </>
  );
}
