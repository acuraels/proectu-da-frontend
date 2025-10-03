import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import header_logo from "/header-logo.svg"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                event.target instanceof Node &&
                !menuRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="header" id="top">
            <div className="header-container">
                <nav className="header-nav">
                    <Link to="/home" className="title">
                        <img className='header-logo' src={header_logo} alt="Логотип" />
                    </Link>

                    {/* Бургер появляется только на мобилках */}
                    <div className="burger-menu" onClick={toggleMenu}>
                        <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
                        <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
                        <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
                    </div>

                    {/* Меню для десктопа */}
                    <ul className="nav-links desktop-menu">
                        <li className="link"><Link to="/news">Новости</Link></li>
                        <li className="link"><Link to="/events">Мероприятия</Link></li>
                        <li className="link"><Link to="/team">Команда</Link></li>
                    </ul>

                    {/* Выпадающее меню для мобилы */}
                    <div ref={menuRef} className={`dropdown-menu ${isMenuOpen ? "active" : ""}`}>
                        <Link to="/news" onClick={closeMenu}>Новости</Link>
                        <Link to="/events" onClick={closeMenu}>Мероприятия</Link>
                        <Link to="/team" onClick={closeMenu}>Команда</Link>
                    </div>

                    <Link to="/login" className="btn-nav">
                        Личный кабинет
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
