import { NavLink } from "react-router-dom";
import '../index.css';

export default function Footer(){
    return(
        <div className="footer">
            <p>Copyright Deckenbau GmbH</p>
            <li>
                <NavLink to="/impressum">Impressum</NavLink>
            </li>
            <li>
                <NavLink to="/">Datenschutz</NavLink>
            </li>
        </div>
    )
}