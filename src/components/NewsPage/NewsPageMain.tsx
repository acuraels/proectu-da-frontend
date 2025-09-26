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
        title: "Студентка УрФУ вошла в топ-3 молодых предпринимателей России",
        image: news_1,
        link: "https://t.me/urfu_ru/7670",
    },
    {
        title: "ПроектуДа: студентам от студентов",
        image: news_2,
        link: "https://vk.com/wall-22941070_72940",
    },
    {
        title: "Твой путеводитель по возможностям - ПроектуДа",
        image: news_3,
        link: "https://vk.com/wall-102895784_8682",
    },
    {
        title: "Время действовать!",
        image: news_4,
        link: "https://vk.com/wall-10593701_10078",
    },
    {
        title:
            "ПроектуДа - бесплатный канал для студентов и молодых предпринимателей. Новость 1",
        image: news_5,
        link: "https://vk.com/rsm_ural?w=wall-3850203_14266",
    },
    {
        title:
            "ПроектуДа - бесплатный канал для студентов и молодых предпринимателей. Новость 2",
        image: news_6,
        link: "https://vk.com/public198986349?w=wall-198986349_3839",
    },
    {
        title:
            "ПроектуДа - бесплатный канал для студентов и молодых предпринимателей. Новость 3",
        image: news_7,
        link: "https://vk.com/rsm_mgrco?w=wall-140142519_4494",
    },
    {
        title:
            "ПроектуДа - бесплатный канал для студентов и молодых предпринимателей. Новость 4",
        image: news_8,
        link: "https://vk.com/studentofural?w=wall-169293535_3307",
    },
    {
        title:
            "ПроектуДа - бесплатный канал для студентов и молодых предпринимателей. Новость 5",
        image: news_9,
        link: "https://vk.com/apf_so?w=wall-133263180_4381",
    },
    {
        title:
            "ПроектуДа - бесплатный канал для студентов и молодых предпринимателей. Новость 6",
        image: news_10,
        link: "https://vk.com/unost_fest?w=wall-43163070_2660",
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
