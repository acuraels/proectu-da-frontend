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
        title: " В технопарке Кванториум Санкт-Петербург прошел 4-дневный интенсив от «ПроектуДа»",
        image: news_1,
        link: "https://vk.com/wall-194548696_10899",
    },
    {
        title: "ПроектуДа: студентам от студентов",
        image: news_2,
        link: "https://vk.com/wall-22941070_72940",
    },
    {
        title: "Центр «Город молодежи»",
        image: news_3,
        link: "https://vk.com/wall-102895784_8682",
    },
    {
        title: "Молодёжное правительство Свердловской области",
        image: news_4,
        link: "https://vk.com/wall-10593701_10078",
    },
    {
        title:
            "«Российский Союз Молодёжи»",
        image: news_5,
        link: "https://vk.com/rsm_ural?w=wall-3850203_14266",
    },
    {
        title:
            "«ПроектуДа» в Санкт-Петербургском университете",
        image: news_6,
        link: "https://t.me/spbuniversity1724/3915",
    },
    {
        title:
            "УрФУ",
        image: news_7,
        link: "https://vk.com/wall-22941070_72178",
    },
    {
        title:
            "Национальная премия «Студент Года». Открыт бесплатный канал для студентов «ПроектуДа»",
        image: news_8,
        link: "https://vk.com/studentofural?w=wall-169293535_3307",
    },
    {
        title:
            "УрГПУ. В зале общества «Знание» пройдет мероприятие от «ПроектуДа», где вы узнаете, как превратить свою идею проект",
        image: news_9,
        link: "https://vk.com/wall-178007_46813",
    },
    {
        title:
            "Росмолодежь.Предпринимай. Молодёжная проектная школа «ПроектуДа» — это платформа- помощник для студентов",
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
                        <div className="news-card" key={index}>
                            <div
                                className="news-image"
                                style={{ backgroundImage: `url(${news.image})` }}
                            />
                            <h2 className="news-card-title">{news.title}</h2>
                            <a
                                href={news.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="news-link"
                            >
                                Читать подробнее
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default NewsPageMain;
