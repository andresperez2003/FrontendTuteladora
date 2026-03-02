import { Link } from 'react-router-dom';
import logoImage from '../assets/images/Logo.png';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import '../styles/components/Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-main">
            <div className="container mx-auto px-4">
                <div className="footer-grid">
                    {/* Branding Column */}
                    <div className="footer-col branding">
                        <Link to="/" className="footer-logo">
                            <img src={logoImage} alt="Logo" className="footer-logo-img" />
                            <div className="footer-logo-text">
                                <span className="title">Tuteladora del pueblo</span>
                                <span className="subtitle">Mecanismo de protección ciudadana</span>
                            </div>
                        </Link>
                        <p className="footer-desc">
                            Facilitamos el acceso a la justicia colombiana a través de herramientas
                            digitales sencillas y gratuitas para la defensa de tus derechos.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="footer-col">
                        <h3 className="footer-title">Navegación</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/que-es">¿Qué es la tutela?</Link></li>
                            <li><Link to="/participantes">Participantes</Link></li>
                            <li><Link to="/proceso">Proceso legal</Link></li>
                            <li><Link to="/tutela">Comenzar trámite</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-col">
                        <h3 className="footer-title">Contacto</h3>
                        <ul className="footer-contact">
                            <li><Mail size={18} /> <span>info@tuteladora.com</span></li>
                            <li><Phone size={18} /> <span>+57 (601) 000-0000</span></li>
                            <li><MapPin size={18} /> <span>Bogotá, D.C. - Colombia</span></li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div className="footer-col">
                        <h3 className="footer-title">Síguenos</h3>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook"><Facebook /></a>
                            <a href="#" aria-label="Twitter"><Twitter /></a>
                            <a href="#" aria-label="Instagram"><Instagram /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Tuteladora del pueblo. Todos los derechos reservados.</p>
                    <div className="footer-legal">
                        <a href="#">Términos y condiciones</a>
                        <span className="separator">|</span>
                        <a href="#">Política de privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
