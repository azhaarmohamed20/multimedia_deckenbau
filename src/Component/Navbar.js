import { NavLink } from "react-router-dom";
import '../index.css';

export default function Navbar(){
    return (
        <div>
            <nav >
                <div>
                    <ul>
                        <p >Deckenbau GmbH</p>
                        <li >
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/galerie">
                                Galerie
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to="/ueberuns">
                                Über uns
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}