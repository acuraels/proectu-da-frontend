import { useState, useEffect } from 'react';
import "./TeamPageMain.css";

import Daniil from "/Daniil.jpg"
import Dasha from "/Dasha.jpg"
import Katya from "/Katya.jpg"
import Kristina from "/Kristina.jpg"
import Nikita from "/Nikita.jpg"
import Oleg from "/Oleg.jpg"

const teamMembers = [
    { name: "Член 1", role: "Дарья Скрипкина", photo: Dasha },
    { name: "Член 2", role: "Кристина Шаврикова", photo: Kristina },
    { name: "Член 3", role: "Екатерина Терпогосян", photo: Katya },
    { name: "Член 4", role: "Даниил Устинов", photo: Daniil },
    { name: "Член 5", role: "Никита Мельников", photo: Nikita },
    { name: "Член 6", role: "Олег Новиков", photo: Oleg },
];

const TeamPageMain = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="team-container">
            <main className="team-content">
                <section className={`team-header ${isVisible ? 'fade-in' : ''}`}>
                    <h1 className="team-title">Наша команда</h1>
                </section>

                <section className={`team-grid-section ${isVisible ? 'slide-up' : ''}`}>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div className="team-member" key={index}>
                                <div
                                    className="team-photo"
                                    style={{ backgroundImage: `url(${member.photo})` }}
                                />
                                <p className="team-role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default TeamPageMain;
