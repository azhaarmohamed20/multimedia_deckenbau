import image1 from '../images/IMG_1.jpg';
import image2 from '../images/IMG_2.jpg';
import image3 from '../images/IMG_3.jpg';

export default function Angebot() {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden h-[40vh] ">
        <img src={image2} alt="Header" className="w-full h-auto object-cover object-center" />
      </div>
      <div className="p-auto relative m-auto w-[85%] bg-white z-20 mt-[28%] text-center">
        <h1 className='font-bold text-[40px]'>Montageprofis in jeder Situation </h1>

        <div className="flex flex-row gap-[10vw]">
            <div className="p-5 ">
              <img src={image1} alt="Image 1" className="w-[350px]" />
              <p>Beratung</p>
            </div>

            <div className="p-5">
              <img src={image1} alt="Image 2" className="w-[350px]" />
              <p>Planung</p>
            </div>

            <div className="p-5">
              <img src={image1} alt="Image 3" className="w-[350px]" />
              <p>Ausführung</p>
            </div>
        </div>
      </div>
    </>
  );
}
