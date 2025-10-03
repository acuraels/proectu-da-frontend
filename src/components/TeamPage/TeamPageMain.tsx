import { useState, useEffect } from "react";
import "./TeamPageMain.css";

import Daniil from "/Daniil.jpg";
import Dasha from "/Dasha.jpg";
import Katya from "/Katya.jpg";
import Kristina from "/Kristina.jpg";
import Nikita from "/Nikita.jpg";
import Oleg from "/Oleg.jpg";
import Maria from "/Maria.jpg";

type TeamMember = {
    name: string;
    photo: string;
    bio: string;
    email?: string;
};

const teamMembers: TeamMember[] = [
    {
        name: "Дарья Скрипкина",
        photo: Dasha,
        bio: "Взаимодействует с федеральными, региональными и муниципальными органами власти и организациями. Работает с партнёрами, спикерами, формирует беседы с участниками и доводит до них необходимую информацию. Представитель команды в Екатеринбурге.",
        email: "proectuda@mail.ru",
    },
    {
        name: "Кристина Шаврикова",
        photo: Kristina,
        bio: "Ответственна за оформление договоров ГПХ с фрилансерами, подготовку актов выполненных работ, выставление счетов и счетов-фактур.",
        email: "shavrickova.kris@yandex.ru"
    },
    {
        name: "Екатерина Петрунина",
        photo: Katya,
        bio: "Ответственна за общее управление проектом, подготовку тем и структуры мероприятий, координацию работы команды и контроль выполнения всех поставленных задач проекта. Представитель команды в Москве.",
        email: "terpogosyan2012@mail.ru",
    },
    {
        name: "Даниил Устинов",
        photo: Daniil,
        bio: "Фронтенд-разработчик и диджитал-куратор. Создаёт склиентскую часть сайтов, интерфейсы, адаптивную вёрстку, UI-дизайн в Figma, администрирует группу VK.",
        email: "daniil.rib@mail.ru",
    },
    {
        name: "Никита Мельников",
        photo: Nikita,
        bio: "SMM-специалист и бэкенд-разработчик в одном лице. Создаёт виральный контент, пишет на Python, настраивает CI/CD.",
        email: "nikitamelnikov502@gmail.com",
    },
    {
        name: "Олег Новиков",
        photo: Oleg,
        bio: "Выступление в СМИ и на отраслевых конференциях. Организация пресс-туров и презентаций проекта. Организация офлайн- и онлайн-активностей для пользователей, формирование и развитие сообщества вокруг проекта. Представитель команды в Санкт-Петербурге.",
        email: "novikov@infochemistry.itmo.ru",
    },
    {
        name: "Маркова Мария",
        photo: Maria,
        bio: "Менеджер проекта. Планирует задачи, контролирует бюджет, организует командную работу, предвидит риски и решает сложности.",
        email: "markira70@mail.ru",
    },
];

const TeamPageMain = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="team-container">
            <main className="team-content">
                <section className={`team-header ${isVisible ? "fade-in" : ""}`}>
                    <h1 className="team-title">Наша команда</h1>
                </section>

                <section className={`team-grid-section ${isVisible ? "slide-up" : ""}`}>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <article className="team-member" key={index}>
                                <div
                                    className="team-photo"
                                    style={{ backgroundImage: `url(${member.photo})` }}
                                    role="img"
                                    aria-label={member.name}
                                />
                                <h3 className="team-name">{member.name}</h3>
                                <p className="team-bio">{member.bio}</p>

                                {member.email && (
                                    <a
                                        className="team-mail"
                                        href={`mailto:${member.email}`}
                                        aria-label={`Написать ${member.name}`}
                                    >
                                        {member.email}
                                    </a>
                                )}
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TeamPageMain;
