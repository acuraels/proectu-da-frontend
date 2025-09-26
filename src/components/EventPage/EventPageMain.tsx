import { useState, useEffect } from 'react';
import "./EventPageMain.css";

import event1_1 from "/event1_1.png"
import event1_2 from "/event1_2.png"
import event1_v from "/event1_v.mov"
import event2_1 from "/event2_1.png"
import event2_2 from "/event2_2.png"
import event2_v from "/event2_v.mov"
import event3_1 from "/event3_1.png"
import event3_2 from "/event3_2.png"
import event3_3 from "/event3_3.png"

const EventPageMain = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="event-container">
            <main className="event-content">
                <section className={`events-header ${isVisible ? 'fade-in' : ''}`}>
                    <h1 className="events-title">Наши мероприятия</h1>
                    <p className="events-subtitle">
                        Погрузись в атмосферу наших событий и узнай, как мы помогаем студентам достигать успеха
                    </p>
                </section>

                <section className={`events-grid-section ${isVisible ? 'slide-up' : ''}`}>
                    <div className="events-grid">
                        <div className="event-card">
                            <h2 className="event-title">Мероприятие 1</h2>
                            <p className="event-description">
                                Описание первого мероприятия. Здесь можно рассказать о том, что происходило,
                                кто участвовал и какие результаты были достигнуты.
                            </p>
                            <div className="event-media-grid">
                                <div className="media-item photo-placeholder">
                                    <div className="placeholder-content">
                                        <img src={event1_1} alt="Мероприятие 1 - Фото 1" />
                                    </div>
                                </div>
                                <div className="media-item video-placeholder">
                                    <div className="placeholder-content">
                                        <video controls>
                                            <source src={event1_v} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="media-item photo-placeholder">
                                    <div className="placeholder-content">
                                        <img src={event1_2} alt="Мероприятие 1 - Фото 2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="event-card">
                            <h2 className="event-title">Мероприятие 2</h2>
                            <p className="event-description">
                                Описание второго мероприятия. Расскажите о ключевых моментах,
                                участниках и достижениях этого события.
                            </p>
                            <div className="event-media-grid">
                                <div className="media-item photo-placeholder">
                                    <div className="placeholder-content">
                                        <img src={event2_1} alt="Мероприятие 2 - Фото 1" />
                                    </div>
                                </div>
                                <div className="media-item video-placeholder">
                                    <div className="placeholder-content">
                                        <video controls>
                                            <source src={event2_v} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="media-item photo-placeholder">
                                    <div className="placeholder-content">
                                        <img src={event2_2} alt="Мероприятие 2 - Фото 2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="event-card">
                            <h2 className="event-title">Мероприятие 3</h2>
                            <p className="event-description">
                                Описание первого мероприятия. Здесь можно рассказать о том, что происходило,
                                кто участвовал и какие результаты были достигнуты.
                            </p>
                            <div className="event-media-grid">
                                <div className="media-item photo-placeholder">
                                    <div className="placeholder-content">
                                        <img src={event3_1} alt="Мероприятие 3 - Фото 1" />
                                    </div>
                                </div>
                                <div className="media-item video-placeholder">
                                    <div className="placeholder-content">
                                        <img src={event3_2} alt="Мероприятие 3 - Фото 2" />
                                    </div>
                                </div>
                                <div className="media-item photo-placeholder">
                                    <div className="placeholder-content">
                                        <img src={event3_3} alt="Мероприятие 3 - Фото 3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={`events-cta ${isVisible ? 'fade-in-delayed' : ''}`}>
                    <div className="cta-content">
                        <h3>Хочешь стать частью наших мероприятий?</h3>
                        <p>Следи за обновлениями и не пропускай возможности для развития!</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EventPageMain;