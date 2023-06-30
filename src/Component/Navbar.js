import { NavLink } from "react-router-dom";
import '../index.css';

export default function Navbar(){
    return (
        <div className="pt-[0.5%] relative z-30 ">
            <nav className="flex m-auto pt-2 ml-[500] m-auto w-[85%] h-[5vh] align-center" >
                <div>
                    <ul className="flex items-center gap-[10vw] justify-around">
                        <p className="text-[18px] font-extrabold text-gray-400 mr-[50px]">Deckenbau GmbH</p>
                        <li className="text-[18px] font-bold">
                            <NavLink className="text-gray-400 aria-[current=page]:text-red-600 text-black" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="text-[18px] font-bold" >
                            <NavLink className="text-gray-400 aria-[current=page]:text-red-600 text-black" to="/angebot">
                                Angebot
                            </NavLink>
                        </li>
                        <li  className="text-[18px] font-bold">
                            <NavLink className="text-gray-400 aria-[current=page]:text-red-600 text-black" to="/ueberuns">
                                Über uns
                            </NavLink>
                        </li>
                        <li  className="text-[18px] font-bold">
                            <NavLink className="text-gray-400 aria-[current=page]:text-red-600 text-black" to="/kontakt">
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}