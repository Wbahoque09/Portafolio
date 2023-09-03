import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DatosPersonales } from '../components/DatosPersonales';
import { Experencia_Profesional } from '../components/Experencia_Profesional';
import { Experiencia_Academica } from '../components/Experiencia_Academica';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Perfil } from '../components/Perfil';

export const Routes_Component = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar />
            
                <Routes>
                    <Route path="/" element={<DatosPersonales />} />
                    <Route path="/Perfil-Profesional" element={<Perfil />} />
                    <Route path="/Experiencia-Profesional" element={<Experencia_Profesional />} />
                    <Route path="/Experiencia-Academica" element={<Experiencia_Academica />} />
                </Routes>
                    <Footer />

                
            </BrowserRouter>
        </>
        
    )
}
