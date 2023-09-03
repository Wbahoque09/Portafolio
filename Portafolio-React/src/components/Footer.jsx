import '../css/footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-logo">
            <h1>Mi Portafolio</h1>
            </div>
            <div className="footer-contact">
            <h3>Contacto</h3>
            <p>Correo Electrónico: info@miportafolio.com</p>
            <p>This is a example</p>
            </div>
            <div className="footer-social">
            <h3>Sígueme en Redes Sociales</h3>
            <div className="social-icons">
                <a href="#" className="social-icon">
                <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
                </a>
            </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2023 Mi Portafolio. Todos los derechos reservados.</p>
        </div>
        </footer>
    )
}
