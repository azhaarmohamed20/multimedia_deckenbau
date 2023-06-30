import ContactForm from "../Component/ContactForm";

export default function Kontakt(){
    return (
        <div className="m-auto w-[100%] mt-[2%] pt-[5%] bg-gray-200 pb-[2%]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.0976973079783!2d8.596285483790284!3d47.41003552721495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa052c110ee83%3A0xb62edac80b652a2f!2sGeerenstrasse%2010%2C%208304%20Wallisellen!5e0!3m2!1sde!2sch!4v1688022661887!5m2!1sde!2sch" width="600" height="450" className="border-[0] m-auto w-[65%] " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <br></br>
            <h1 className="text-[30px] font-bold m-auto w-[65%] text-center">Nehmen sie mit und Kontakt auf</h1>
            <br></br>

            <div className="flex flex-row gap-[10vw] m-auto w-[50%] text-center">
                <div className="flex flex-col">
                    <h2 className="font-bold text-[20px]">Hauptsitz</h2>
                    <br></br>
                    <p className="text-gray-400 text-left">Geerenstrasse 10 <br></br>
                        8304 Wallisellen                    
                    </p>
                    <br></br>
                    <p className="text-gray-400 text-left">Telefon: 078 631 95 06</p>
                    <p className="text-left">azhaar.mohamed@lernende.bbw.ch</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-[20px]">Kontaktformular</h2>
                    <br></br>
                    <ContactForm />
                </div>
            </div>
            
        </div>
    )
}