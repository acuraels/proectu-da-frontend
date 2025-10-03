import { useState, useEffect } from "react";
import "./NewsPageMain.css";

import news_1 from "/news_1.jpg";
import news_2 from "/news_2.jpg";
import news_3 from "/news_3.jpg";
import news_4 from "/news_4.jpg";
import news_5 from "/news_5.jpg";
import news_6 from "/news_6.jpg";
import news_7 from "/news_7.jpg";
import news_8 from "/news_8.jpg";
import news_9 from "/news_9.jpg";
import news_10 from "/news_10.jpg";

const newsList = [
    {
        heading: "Технопарк «Кванториум»",
        subtitle: "В Санкт-Петербурге прошёл 4-дневный интенсив от «ПроектуДа»",
        image: news_1,
        link: "https://vk.com/wall-194548696_10899",
    },
    {
        heading: "Уральский федеральный университет имени первого президента России Б. Н. Ельцина (УрФУ) ",
        subtitle: "ПроектуДа: студентам от студентов",
        image: news_2,
        link: "https://vk.com/wall-22941070_72940",
    },
    {
        heading: "Центр «Город молодёжи»",
        subtitle: "«ПроектуДа»: Твой путеводитель по возможностям",
        image: news_3,
        link: "https://vk.com/wall-102895784_8682",
    },
    {
        heading: "Молодёжное правительство Свердловской области",
        subtitle: "Время действовать с «ПроектуДа»",
        image: news_4,
        link: "https://vk.com/wall-10593701_10078",
    },
    {
        heading: "Российский Союз Молодёжи",
        subtitle: "Присоединяйтесь к каналу возможностей «ПроектуДа» и не пропустите ничего важного! ",
        image: news_5,
        link: "https://vk.com/rsm_ural?w=wall-3850203_14266",
    },
    {
        heading: "Санкт-Петербургский государственный университет (СПбГУ) ",
        subtitle: "«ПроектуДа» дает множество возможностей",
        image: news_6,
        link: "https://t.me/spbuniversity1724/3915",
    },
    {
        heading: "Уральский федеральный университет имени первого президента России Б. Н. Ельцина (УрФУ)",
        subtitle: "«ПроектуДа» — это место, где каждый студент сможет найти поддержку и мотивацию для реализации своих проектов и идей!",
        image: news_7,
        link: "https://vk.com/wall-22941070_72178",
    },
    {
        heading: "Национальная премия «Студент года»",
        subtitle:
            "Открыт бесплатный канал для студентов «ПроектуДа»",
        image: news_8,
        link: "https://vk.com/studentofural?w=wall-169293535_3307",
    },
    {
        heading: "УрГПУ",
        subtitle:
            "В зале общества «Знание» пройдет мероприятие от «ПроектуДа», где вы узнаете, как превратить свою идею проект",
        image: news_9,
        link: "https://vk.com/wall-178007_46813",
    },
    {
        heading: "Росмолодёжь.Предпринимай",
        subtitle:
            "Молодёжная проектная школа «ПроектуДа» — платформа-помощник для студентов.",
        image: news_10,
        link: "https://t.me/rosmolodez_predprinimay/12277",
    },
];

const NewsPageMain = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="news-container">
            <main className="news-content">
                <h1 className={`news-title ${isVisible ? "fade-in" : ""}`}>Новости</h1>

                <div className={`news-grid ${isVisible ? "slide-up" : ""}`}>
                    {newsList.map((news, index) => (
                        <article className="news-card" key={index}>
                            <div
                                className="news-image"
                                style={{ backgroundImage: `url(${news.image})` }}
                                role="img"
                                aria-label={news.heading}
                            />
                            <h2 className="news-card-heading">{news.heading}</h2>
                            <p className="news-card-subtitle">{news.subtitle}</p>

                            <a
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news-link"
                            >
                                Читать подробнее
                            </a>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default NewsPageMain;
