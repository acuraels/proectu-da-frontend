import "./Footer.css";
import tgIcon from "/TG-logo.svg"
import vkIcon from "/VK-logo.svg"
import emailIcon from "/Email-icon.svg"
import logo from "/header-logo.svg"

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
                    <a href="mailto:">
                        <img className="email-icon" src={emailIcon} alt="MailBox" />
                    </a>
                    <p className="email-text">почта@mail.ru</p>
                </div>

                <div className="footer-links">
                    <a href="">
                        <img className="icon" src={tgIcon} alt="TG" />
                    </a>
                    <a href="">
                        <img className="icon" src={vkIcon} alt="VK" />
                    </a>
                </div>

                <div className="copyright">
                    <p className="copyright-text">Created by Daniil Ustinov. All rights reserved ©</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
