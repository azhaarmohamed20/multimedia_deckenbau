import { NavLink } from "react-router-dom";
import '../index.css';

export default function Navbar(){
    return (
        <div className="flex p-2 h-[10vh] align-center">
            <nav className="flex w-[80%] m-auto pt-2 ml-[500]" >
                <div>
                    <ul className="flex items-center gap-[6vw] justify-around">
                        <p className="text-[18px] font-extrabold text-black mr-[50px]">Deckenbau GmbH</p>
                        <li className="text-[18px] font-bold">
                            <NavLink className="text-black aria-[current=page]:text-red-600 text-black" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="text-[18px] font-bold" >
                            <NavLink className="text-black aria-[current=page]:text-red-600 text-black" to="/galerie">
                                Galerie
                            </NavLink>
                        </li>
                        <li  className="text-[18px] font-bold">
                            <NavLink className="text-black aria-[current=page]:text-red-600 text-black" to="/ueberuns">
                                Über uns
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}