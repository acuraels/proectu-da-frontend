import { Link } from 'react-router-dom';
import "./Footer.css";
import tgIcon from "/TG-logo.svg"
import vkIcon from "/VK-logo.svg"
import emailIcon from "/Email-icon.svg"
import footer_logo from "/header-logo.svg"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container" id="contact">
                <h2 className="footer-title">Контакты</h2>

                <p className="footer-text">
                    ИП Скрипкина Дарья Андреевна <br />
                    ИНН 668604317306 <br />
                    ОГРНИП 323665800055998 <br />
                </p>

                <div className="footer-email">
                    <a href="mailto:proectuda@mail.ru">
                        <img className="email-icon" src={emailIcon} alt="MailBox" />
                    </a>
                    <p className="email-text">proectuda@mail.ru</p>
                </div>

                <div className="footer-links">
                    <a href="https://t.me/proectu_da">
                        <img className="icon" src={tgIcon} alt="TG" />
                    </a>
                    <a href="https://vk.com/proectuda">
                        <img className="icon" src={vkIcon} alt="VK" />
                    </a>
                </div>

                <div className="copyright">
                    <p className="copyright-text">Created by Daniil Ustinov. All rights reserved ©</p>
                </div>
            </div>
            <Link to="/home" className="title">
                <img className='footer-logo' src={footer_logo} alt="Логотип" />
            </Link>
        </footer>
    );
}

export default Footer;
