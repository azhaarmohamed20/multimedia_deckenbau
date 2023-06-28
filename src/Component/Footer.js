import { NavLink } from "react-router-dom";
import '../index.css';

export default function Footer(){
    return(
        <div>
            <p>Copyright Deckenbau GmbH</p>
            <li>
                <NavLink to="/">Impressum</NavLink>
            </li>
            <li>
                <NavLink to="/">Datenschutz</NavLink>
            </li>
        </div>
    )
}