import { useEffect, useMemo, useRef, useState } from "react";
import "./EventPageMain.css";

import event1_1 from "/event1_1.png";
import event1_2 from "/event1_2.png";
import event1_v from "/event1_v.mov";
import event1_3 from "/event1_3.png";
import event1_4 from "/event1_4.png";
import event1_5 from "/event1_5.png";

import event3_1 from "/event3_1.png";
import event3_2 from "/event3_2.png";
import event3_3 from "/event3_3.png";
import event3_4 from "/event3_4.png";
import event3_5 from "/event3_5.png";
import event3_6 from "/event3_6.png";
import event3_7 from "/event3_7.png";
import event3_8 from "/event3_8.png";
import event3_9 from "/event3_9.png";

type MediaItem =
    | { type: "img"; src: string; alt: string }
    | { type: "video"; src: string; alt: string };

type EventSlide = { media: MediaItem[] };

const spbSlides: EventSlide[] = [
    {
        media: [
            { type: "img", src: event1_1, alt: "СПб — Мероприятие 1 — Фото 1" },
            { type: "video", src: event1_v, alt: "СПб — Мероприятие 1 — Видео" },
            { type: "img", src: event1_2, alt: "СПб — Мероприятие 1 — Фото 2" },
        ],
    },
    {
        media: [
            { type: "img", src: event1_3, alt: "СПб — Мероприятие 2 — Фото 1" },
            { type: "img", src: event1_4, alt: "СПб — Мероприятие 2 — Видео" },
            { type: "img", src: event1_5, alt: "СПб — Мероприятие 2 — Фото 2" },
        ],
    },
];

const ekbSlides: EventSlide[] = [
    {
        media: [
            { type: "img", src: event3_1, alt: "Екб — Мероприятие — Фото 1" },
            { type: "img", src: event3_2, alt: "Екб — Мероприятие — Фото 2" },
            { type: "img", src: event3_3, alt: "Екб — Мероприятие — Фото 3" },
        ],
    },
    {
        media: [
            { type: "img", src: event3_4, alt: "Екб — Мероприятие — Фото 4" },
            { type: "img", src: event3_5, alt: "Екб — Мероприятие — Фото 5" },
            { type: "img", src: event3_6, alt: "Екб — Мероприятие — Фото 6" },
        ],
    },
    {
        media: [
            { type: "img", src: event3_7, alt: "Екб — Мероприятие — Фото 7" },
            { type: "img", src: event3_8, alt: "Екб — Мероприятие — Фото 8" },
            { type: "img", src: event3_9, alt: "Екб — Мероприятие — Фото 9" },
        ],
    },
];

function InfiniteCarousel({
    title,
    slides,
    visible,
}: {
    title: string;
    slides: EventSlide[];
    visible: boolean;
}) {
    // Клонируем первый и последний для «бесконечного» эффекта
    const extendedSlides = useMemo<EventSlide[]>(
        () => (slides.length > 0 ? [slides[slides.length - 1], ...slides, slides[0]] : []),
        [slides]
    );

    // Начинаем с индекса 1 (реальный первый слайд)
    const [index, setIndex] = useState(1);
    const [withTransition, setWithTransition] = useState(true);
    const isLockedRef = useRef(false); // защита от спама кликов до конца анимации

    useEffect(() => {
        setIndex(1);
        setWithTransition(true);
    }, [slides.length]);

    const onTransitionEnd = () => {
        isLockedRef.current = false;
        // Перескок без анимации, если ушли на клон
        if (index === 0) {
            setWithTransition(false);
            setIndex(slides.length);
        } else if (index === slides.length + 1) {
            setWithTransition(false);
            setIndex(1);
        }
    };

    // Включаем анимацию обратно после «тихого» перескока
    useEffect(() => {
        if (!withTransition) {
            const id = requestAnimationFrame(() => setWithTransition(true));
            return () => cancelAnimationFrame(id);
        }
    }, [withTransition]);

    const prev = () => {
        if (isLockedRef.current || slides.length === 0) return;
        isLockedRef.current = true;
        setWithTransition(true);
        setIndex((i) => i - 1);
    };
    const next = () => {
        if (isLockedRef.current || slides.length === 0) return;
        isLockedRef.current = true;
        setWithTransition(true);
        setIndex((i) => i + 1);
    };

    const dotsCount = slides.length;

    return (
        <section className={`event-section ${visible ? "slide-up" : ""}`}>
            <h2 className="event-title">{title}</h2>

            <div className="carousel">
                <button
                    className="carousel-arrow left"
                    onClick={prev}
                    aria-label="Предыдущий слайд"
                >
                    ‹
                </button>

                <div className="carousel-viewport">
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${index * 100}%)`,
                            transition: withTransition ? "transform 0.45s ease" : "none",
                        }}
                        onTransitionEnd={onTransitionEnd}
                        aria-live="polite"
                    >
                        {extendedSlides.map((slide, sIdx) => (
                            <div className="carousel-slide" key={sIdx}>
                                <div className="event-media-grid">
                                    {slide.media.map((m, mIdx) => {
                                        const boxClass =
                                            m.type === "video" ? "video-placeholder" : "photo-placeholder";
                                        return (
                                            <div className={`media-item ${boxClass}`} key={mIdx}>
                                                {m.type === "img" ? (
                                                    <img src={m.src} alt={m.alt} loading="lazy" />
                                                ) : (
                                                    <video
                                                        controls
                                                        preload="metadata"
                                                        src={m.src}
                                                        aria-label={m.alt}
                                                        autoPlay
                                                        muted
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="carousel-arrow right"
                    onClick={next}
                    aria-label="Следующий слайд"
                >
                    ›
                </button>
            </div>

            {dotsCount > 1 && (
                <div className="carousel-dots" role="tablist" aria-label="Слайды">
                    {Array.from({ length: dotsCount }).map((_, i) => {
                        // активная точка соответствует реальному индексу [1..N]
                        const realIndex = index === 0 ? dotsCount : index === dotsCount + 1 ? 1 : index;
                        return (
                            <button
                                key={i}
                                role="tab"
                                aria-selected={i + 1 === realIndex}
                                className={`dot ${i + 1 === realIndex ? "active" : ""}`}
                                onClick={() => {
                                    setWithTransition(true);
                                    setIndex(i + 1);
                                }}
                                aria-label={`Перейти к слайду ${i + 1}`}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
}

const EventPageMain = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => setIsVisible(true), []);

    return (
        <div className="event-container">
            <main className="event-content">
                <section className={`events-header ${isVisible ? "fade-in" : ""}`}>
                    <h1 className="events-title">Наши мероприятия</h1>
                    <p className="events-subtitle">
                        Погрузись в атмосферу наших событий и узнай, как мы помогаем студентам достигать успеха
                    </p>
                </section>

                {/* Лента Санкт-Петербург */}
                <InfiniteCarousel
                    title="Мероприятия в Санкт-Петербурге"
                    slides={spbSlides}
                    visible={isVisible}
                />

                {/* Лента Екатеринбург */}
                <InfiniteCarousel
                    title="Мероприятия в Екатеринбурге"
                    slides={ekbSlides}
                    visible={isVisible}
                />

                <section className={`events-cta ${isVisible ? "fade-in-delayed" : ""}`}>
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
