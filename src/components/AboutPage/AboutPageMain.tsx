import { useEffect, useState } from "react";
import "./AboutPageMain.css";

const AboutPageMain = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => setIsVisible(true), []);

    return (
        <div className="about-container">
            <main className="about-content">
                {/* Hero */}
                <section className={`about-hero ${isVisible ? "fade-in" : ""}`}>
                    <h1 className="about-title">О нас</h1>
                    <p className="about-subtitle">
                        Мы — амбициозная группа студентов, прошедших путь от неудач до побед
                        в проектной деятельности и молодёжном предпринимательстве.
                        Наша цель — помочь тебе осуществить мечту и взять возможности в свои руки.
                    </p>
                </section>

                {/* Intro */}
                <section className={`about-section ${isVisible ? "slide-up" : ""}`}>
                    <div className="about-card">
                        <p className="about-text">
                            Мы за проектную деятельность и активную жизненную позицию. Мы понимаем,
                            с какими вопросами и сомнениями сталкиваются начинающие — и закрываем их
                            поддержкой, понятными инструментами и простыми объяснениями.
                        </p>
                    </div>
                </section>

                {/* Pain points */}
                <section className={`about-section ${isVisible ? "slide-up" : ""}`}>
                    <h2 className="section-heading">Мы знаем твои боли</h2>
                    <ul className="pain-list">
                        <li>Все конкурсы и гранты — новое для меня, не понимаю, как с этим работать.</li>
                        <li>Когда сталкиваюсь с новой информацией, возникают вопросы, а мотивации искать ответы нет.</li>
                        <li>Сложно и страшно заниматься проектной деятельностью и подавать заявки на гранты.</li>
                        <li>Нет опыта, не представляю, какие трудности и нюансы ждут — от этого ещё страшнее.</li>
                        <li>Сложно придумать идею, сложная отчётность, сложно читать положение.</li>
                        <li>Слишком много работы — мне лень.</li>
                        <li>Тяжело, не знаю, успею ли; совмещать что-то трудно.</li>
                        <li>Не хочу участвовать из-за непонимания, как заполнять заявку.</li>
                        <li>Знал(а) о проектах и конкурсах, но не знал(а), что за это платят.</li>
                        <li>О возможностях знаю, а к действиям не перехожу.</li>
                        <li>Есть другие приоритеты, хотя можно совмещать учёбу и проектную деятельность.</li>
                        <li>Не верю, что у меня получится.</li>
                    </ul>
                </section>

                {/* Project block */}
                <section className={`about-section ${isVisible ? "slide-up" : ""}`}>
                    <div className="project-card">
                        <h3 className="project-title">Именно для этого мы создали проект&nbsp;«Проекту<span className="accent">Да</span>»</h3>
                        <p className="project-text">
                            Он поможет тебе использовать все меры поддержки от государства, не совершать типичных ошибок
                            и активно проводить студенческое время, превращая идеи в реальные проекты.
                        </p>
                    </div>
                </section>

                {/* CTA */}
                <section className={`about-section ${isVisible ? "fade-in-delayed" : ""}`}>
                    <div className="cta-card">
                        <p className="cta-title">Присоединяйся к нам и скажи проекту: «Да»!</p>
                        <p className="cta-sub">С любовью, твоя команда ❤️</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPageMain;
