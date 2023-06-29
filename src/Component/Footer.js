import { NavLink } from "react-router-dom";
import '../index.css';

export default function Footer(){
    return(
        <div>
            <div className="flex m-auto h-16 relative bottom-0 flex-row items-center gap-[8vw] align-center ">
                <p>Copyright Deckenbau GmbH</p>
                <NavLink to="/impressum">Impressum</NavLink>
                <NavLink to="/datenschutz">Datenschutz</NavLink>
            </div>
        </div>
    )
}