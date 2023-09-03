import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DatosPersonales } from '../components/DatosPersonales';
import { Navbar } from '../components/Navbar';
import { Perfil } from '../components/Perfil';

export const Routes_Component = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<DatosPersonales />} />
                <Route path="/Perfil-Profesional" element={<Perfil />} />
                {/* <Route path="/acerca" element={Acerca} /> */}
                {/* <Route path="/servicios" element={Servicios} /> */}
            </Routes>
        </BrowserRouter>
    )
}
