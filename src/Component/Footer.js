import { NavLink } from "react-router-dom";
import '../index.css';

export default function Footer(){
    return(
        <footer className="footer bg-yellow-300 flex items-center mt-[2%]">
            <div className="container mx-auto px-4">
            <div className="flex items-center justify-center h-24 gap-[10vw]">
                <p className="text-black">Copyright Deckenbau GmbH</p>
                <NavLink to="/impressum" className="text-gray-600 font-bold">Impressum</NavLink>
                <NavLink to="/datenschutz" className="text-gray-600 font-bold">Datenschutz</NavLink>
            </div>
            </div>
        </footer>
    )
}