import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/images/Logo.png';
import { ReactNode } from 'react';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    actions?: ReactNode;
}

export function Navbar({ actions, className, ...props }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={`bg-primary text-primary-foreground py-3 md:py-4 px-6 ${className || ''}`} {...props}>
                <div className="container mx-auto px-2 md:px-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2 md:gap-3">
                            <img src={logoImage} alt="Logo" className="w-10 md:w-16 h-auto" style={{ maxWidth: '64px' }} />
                            <div>
                                <h1 className="text-sm md:text-xl font-bold leading-tight tracking-tight">Tuteladora del pueblo</h1>
                                <p className="hidden md:block text-[9px] md:text-xs opacity-90 leading-tight tracking-tight">Generador de Acciones de Tutela</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="desktop-nav items-center gap-8">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `text-base transition-all px-4 py-2 rounded-full ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                                }
                            >
                                Inicio
                            </NavLink>
                            <NavLink
                                to="/que-es"
                                className={({ isActive }) =>
                                    `text-base transition-all px-4 py-2 rounded-full ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                                }
                            >
                                ¿Qué es?
                            </NavLink>
                            <NavLink
                                to="/participantes"
                                className={({ isActive }) =>
                                    `text-base transition-all px-4 py-2 rounded-full ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                                }
                            >
                                Participantes
                            </NavLink>
                            <NavLink
                                to="/proceso"
                                className={({ isActive }) =>
                                    `text-base transition-all px-4 py-2 rounded-full ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                                }
                            >
                                Proceso
                            </NavLink>
                            <NavLink
                                to="/tutela"
                                className={({ isActive }) =>
                                    `text-base transition-all px-4 py-2 rounded-full ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`
                                }
                            >
                                Comenzar
                            </NavLink>
                        </nav>

                        <div className="flex items-center gap-4">
                            {actions && <div className="hidden md:flex items-center gap-2">{actions}</div>}

                            {/* Mobile Menu Toggle */}
                            <button
                                className="mobile-nav-toggle text-primary-foreground p-2"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="mobile-menu-container bg-white border-b py-4 px-4 shadow-lg animate-in slide-in-from-top-2">
                    <div className="container mx-auto flex flex-col gap-4">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `text-base py-2 px-4 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-800 font-bold' : 'text-gray-600 hover:bg-gray-50'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/que-es"
                            className={({ isActive }) =>
                                `text-base py-2 px-4 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-800 font-bold' : 'text-gray-600 hover:bg-gray-50'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            ¿Qué es?
                        </NavLink>
                        <NavLink
                            to="/participantes"
                            className={({ isActive }) =>
                                `text-base py-2 px-4 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-800 font-bold' : 'text-gray-600 hover:bg-gray-50'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Participantes
                        </NavLink>
                        <NavLink
                            to="/proceso"
                            className={({ isActive }) =>
                                `text-base py-2 px-4 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-800 font-bold' : 'text-gray-600 hover:bg-gray-50'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Proceso
                        </NavLink>
                        <NavLink
                            to="/tutela"
                            className={({ isActive }) =>
                                `text-base py-2 px-4 rounded-lg transition-colors ${isActive ? 'bg-blue-50 text-blue-800 font-bold' : 'text-gray-600 hover:bg-gray-50'}`
                            }
                            onClick={() => setIsOpen(false)}
                        >
                            Comenzar
                        </NavLink>

                        {actions && (
                            <div className="pt-2 mt-2 border-t border-gray-100 flex justify-center">
                                {actions}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
