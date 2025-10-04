import { useMemo, useState } from "react";
import "./LoginPageMain.css";

type TabKey = "profile" | "contests" | "certs" | "progress";

const LoginPageMain = () => {
    const [activeTab, setActiveTab] = useState<TabKey>("profile");

    // ======= Профиль: демо-данные для визитки и прогресса =======
    const userId = "12345";
    const visitLink = `https://ai.proectuda.ru/user/${userId}`;
    const [copied, setCopied] = useState(false);
    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(visitLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            // no-op: только вёрстка
        }
    };

    // ======= Мои конкурсы: демо-таблица =======
    type ContestRow = {
        name: string;
        prize: string;
        action: string;
        daysLeft: number;
        deadline: string;
    };

    const demoContests: ContestRow[] = [
        {
            name: "Студенческий стартап от ФСИ",
            prize: "1 000 000 ₽",
            action: "Заполнить заявку",
            daysLeft: 1,
            deadline: "12.10.2025",
        },
        {
            name: "Умник",
            prize: "500 000 ₽",
            action: "Подготовить эссе",
            daysLeft: 3,
            deadline: "15.10.2025",
        },
        {
            name: "Росмолодёжь.Гранты",
            prize: "1 000 000 - 1 500 000 ₽",
            action: "Подать проект",
            daysLeft: 3,
            deadline: "18.10.2025",
        },
        {
            name: "Альфа Шанс",
            prize: "300 000 ₽",
            action: "Собрать пакет документов",
            daysLeft: 6,
            deadline: "24.10.2025",
        },
        {
            name: "Стипендиальная программа «Система»",
            prize: "125 000 ₽",
            action: "Заполнить заявку",
            daysLeft: 6,
            deadline: "27.10.2025",
        },
        {
            name: "Именная стипендия Владимира Потанина",
            prize: "150 000 - 450 000 ₽ (25 000 ₽ ежемесячно)",
            action: "Подготовить эссе",
            daysLeft: 6,
            deadline: "30.10.2025",
        },
        {
            name: "Грант Президента РФ",
            prize: "20 000 - 40 000 ₽ ежемесячно",
            action: "Подать проект",
            daysLeft: 12,
            deadline: "03.11.2025",
        },
        {
            name: "Федеральный конкурс «Создай НАШЕ»",
            prize: "1 000 000 ₽",
            action: "Собрать пакет документов",
            daysLeft: 12,
            deadline: "11.11.2025",
        },
        {
            name: "Грант от Т-Банка ",
            prize: "250 000 ₽",
            action: "Заполнить заявку",
            daysLeft: 12,
            deadline: "17.11.2025",
        },
        {
            name: "Стипендия от Альфа-банка",
            prize: "5 000 ₽ ежемесячно",
            action: "Подготовить эссе",
            daysLeft: 12,
            deadline: "28.11.2025",
        },
    ];

    const deadlineClass = (d: number) => {
        if (d <= 1) return "dl-badge red";
        if (d <= 3) return "dl-badge orange";
        if (d <= 7) return "dl-badge yellow";
        return "dl-badge green";
    };

    // ======= Мои грамоты: демо-список =======
    type CertItem = {
        title: string;
        year: number;
        level: "Региональный" | "Всероссийский" | "Международный";
        status: "Победитель" | "Участник";
        fileName: string;
    };

    const demoCerts: CertItem[] = [
        {
            title: "Росмолодёжь.Гранты",
            year: 2024,
            level: "Всероссийский",
            status: "Победитель",
            fileName: "grant_winner_2024.pdf",
        },
        {
            title: "Студент года — Регион",
            year: 2023,
            level: "Региональный",
            status: "Участник",
            fileName: "student_award_2023.jpg",
        },
        {
            title: "International AI Challenge",
            year: 2025,
            level: "Международный",
            status: "Победитель",
            fileName: "ai_challenge_2025.docx",
        },
    ];

    const levelStars = (level: CertItem["level"]) =>
        level === "Региональный" ? 1 : level === "Всероссийский" ? 2 : 3;

    const totalStars = useMemo(
        () => demoCerts.reduce((acc, c) => acc + levelStars(c.level), 0),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [demoCerts.length]
    );

    // ======= Прогресс: демо-статистика =======
    const participated = 10;
    const won = 3;
    const maxVal = Math.max(participated, won, 1);
    const partPct = Math.round((participated / maxVal) * 100);
    const wonPct = Math.round((won / maxVal) * 100);

    return (
        <div className="login-container">
            <main className="login-content">
                {/* ====== Авторизация ====== */}
                <section className="auth-card slide-up">
                    <div className="auth-card__left">
                        <h2 className="section-title">Вход / Регистрация</h2>
                        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                                <input id="email" type="email" className="input" placeholder="you@example.com" />
                            </div>

                            <div className="form-row">
                                <label className="form-label" htmlFor="password">
                                    Пароль
                                </label>
                                <input id="password" type="password" className="input" placeholder="••••••••" />
                            </div>

                            <div className="auth-actions">
                                <button className="btn btn-primary">Войти</button>
                                <button className="btn btn-secondary" type="button">
                                    Зарегистрироваться
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* ====== Навигация по ЛК ====== */}
                <nav className="lk-tabs slide-up">
                    <button
                        className={`lk-tab ${activeTab === "profile" ? "active" : ""}`}
                        onClick={() => setActiveTab("profile")}
                    >
                        Профиль
                    </button>
                    <button
                        className={`lk-tab ${activeTab === "contests" ? "active" : ""}`}
                        onClick={() => setActiveTab("contests")}
                    >
                        Мои конкурсы
                    </button>
                    <button
                        className={`lk-tab ${activeTab === "certs" ? "active" : ""}`}
                        onClick={() => setActiveTab("certs")}
                    >
                        Мои грамоты
                    </button>
                    <button
                        className={`lk-tab ${activeTab === "progress" ? "active" : ""}`}
                        onClick={() => setActiveTab("progress")}
                    >
                        Прогресс
                    </button>
                </nav>

                {/* ====== Профиль ====== */}
                {activeTab === "profile" && (
                    <section className="card slide-up">
                        <h3 className="card-title">Профиль</h3>

                        <div className="profile-grid">
                            <div className="form-row span-2">
                                <label className="form-label" htmlFor="status">
                                    Статус
                                </label>
                                <select id="status" className="input">
                                    <option>Студент бакалавриата</option>
                                    <option>Студент магистратуры</option>
                                    <option>Студент аспирантуры</option>
                                    <option>Школьник</option>
                                </select>
                            </div>

                            <div className="form-row">
                                <label className="form-label" htmlFor="org">
                                    ВУЗ / Школа
                                </label>
                                <input id="org" className="input" placeholder="СПбГУ / Лицей №..." />
                            </div>

                            <div className="form-row">
                                <label className="form-label" htmlFor="course">
                                    Курс
                                </label>
                                <input id="course" className="input" placeholder="1 / 2 / 3 / 4 / 5" />
                            </div>

                            <div className="form-row span-2">
                                <label className="form-label" htmlFor="interests">
                                    Направления интересов
                                </label>
                                <input
                                    id="interests"
                                    className="input"
                                    placeholder="ИИ, стартапы, образование, дизайн..."
                                />
                            </div>
                        </div>

                        <div className="visit-link">
                            <div className="visit-link__info">
                                <p className="muted">Уникальная ссылка-визитка</p>
                                <a className="visit-link__url" href={visitLink} target="_blank" rel="noreferrer">
                                    {visitLink}
                                </a>
                            </div>
                            <button className="btn btn-primary" onClick={copyLink}>
                                {copied ? "✓ Скопировано" : "Скопировать ссылку"}
                            </button>
                        </div>
                    </section>
                )}

                {/* ====== Мои конкурсы ====== */}
                {activeTab === "contests" && (
                    <section className="card slide-up">
                        <div className="card-title-row">
                            <h3 className="card-title">Мои конкурсы</h3>
                            <div className="legend">
                                <span className="legend-item">
                                    <i className="legend-dot red" /> 1 день
                                </span>
                                <span className="legend-item">
                                    <i className="legend-dot orange" /> 2–3 дня
                                </span>
                                <span className="legend-item">
                                    <i className="legend-dot yellow" /> 4–7 дней
                                </span>
                                <span className="legend-item">
                                    <i className="legend-dot green" /> &gt;7 дней
                                </span>
                            </div>
                        </div>

                        <div className="table-wrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Название</th>
                                        <th>Награда</th>
                                        <th>Действия</th>
                                        <th>Дедлайн</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {demoContests.map((row, i) => (
                                        <tr key={i}>
                                            <td>{row.name}</td>
                                            <td>{row.prize}</td>
                                            <td>{row.action}</td>
                                            <td>
                                                <span className={deadlineClass(row.daysLeft)}>{row.deadline}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                {/* ====== Мои грамоты ====== */}
                {activeTab === "certs" && (
                    <section className="card slide-up">
                        <div className="card-title-row">
                            <h3 className="card-title">Мои грамоты</h3>
                            <div className="certs-stats">
                                <span className="counter">Всего грамот: {demoCerts.length}</span>
                                <span className="stars">
                                    {Array.from({ length: totalStars }).map((_, i) => (
                                        <Star key={i} />
                                    ))}
                                </span>
                            </div>
                        </div>

                        <div className="uploader">
                            <div className="uploader__drop">
                                <input id="file" type="file" multiple className="file-input" />
                                <label htmlFor="file" className="drop-text">
                                    Перетащите файлы сюда или <span>нажмите чтобы выбрать</span>
                                    <span className="drop-sub">PDF / DOCX / JPG</span>
                                </label>
                            </div>

                            <div className="uploader__meta">
                                <div className="form-row">
                                    <label className="form-label">Название конкурса</label>
                                    <input className="input" placeholder="Например: Росмолодёжь.Гранты" />
                                </div>
                                <div className="form-row two">
                                    <div>
                                        <label className="form-label">Год</label>
                                        <input className="input" placeholder="2025" />
                                    </div>
                                    <div>
                                        <label className="form-label">Статус</label>
                                        <select className="input">
                                            <option>Победитель</option>
                                            <option>Участник</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <label className="form-label">Уровень</label>
                                    <select className="input">
                                        <option>Региональный — ⭐</option>
                                        <option>Всероссийский — ⭐⭐</option>
                                        <option>Международный — ⭐⭐⭐</option>
                                    </select>
                                </div>
                                <button className="btn btn-secondary" type="button">
                                    Добавить (демо)
                                </button>
                            </div>
                        </div>

                        <div className="certs-grid">
                            {demoCerts.map((c, i) => (
                                <div className="cert-card" key={i}>
                                    <div className="cert-card__top">
                                        <div className="cert-title">{c.title}</div>
                                        <div className="cert-stars">
                                            {Array.from({ length: levelStars(c.level) }).map((_, j) => (
                                                <Star key={j} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="cert-meta">
                                        <span className="badge">{c.level}</span>
                                        <span className="badge">{c.status}</span>
                                        <span className="badge">{c.year}</span>
                                    </div>
                                    <div className="cert-file">{c.fileName}</div>
                                    <div className="priv-note">Приватно. Доступно по уникальной ссылке.</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* ====== Прогресс ====== */}
                {activeTab === "progress" && (
                    <section className="card slide-up">
                        <h3 className="card-title">Прогресс</h3>

                        <p className="muted">
                            В этом году вы участвовали в <b>{participated}</b> конкурсах, победили в{" "}
                            <b>{won}</b>.
                        </p>

                        <div className="bars">
                            <div className="bar">
                                <div className="bar__label">Участия</div>
                                <div className="bar__track">
                                    <div className="bar__fill" style={{ width: `${partPct}%` }} />
                                </div>
                                <div className="bar__value">{participated}</div>
                            </div>
                            <div className="bar">
                                <div className="bar__label">Победы</div>
                                <div className="bar__track">
                                    <div className="bar__fill" style={{ width: `${wonPct}%` }} />
                                </div>
                                <div className="bar__value">{won}</div>
                            </div>
                        </div>

                        <div className="stars-summary">
                            <span className="muted">Количество звёзд (по грамотам):</span>
                            <span className="stars">
                                {Array.from({ length: totalStars }).map((_, i) => (
                                    <Star key={i} />
                                ))}
                            </span>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

const Star = () => (
    <svg className="star" viewBox="0 0 24 24" aria-hidden="true">
        <path
            fill="currentColor"
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
    </svg>
);

export default LoginPageMain;
