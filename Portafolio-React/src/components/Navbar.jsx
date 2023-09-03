import { Link } from 'react-router-dom'; 
import '../css/navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">React</div>
            <ul className="nav-links">
                <li><Link to="/">Datos Personales</Link></li>
                <li><Link to="/Perfil-Profesional">Perfil profesional</Link></li>
                <li><Link to="/Experiencia-Profesional">Experiencia Profesional</Link></li>
                <li><Link to="/Experiencia-Academica">Experiencia Académica</Link></li>
            </ul>
        </nav>
    )
}
