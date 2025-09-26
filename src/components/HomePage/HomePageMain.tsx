import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Users, Target, Award } from 'lucide-react';
import "./HomePageMain.css";

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

const HomePageMain = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Привет! 👋 Я ProectuDa AI - твой персональный помощник по грантам и конкурсам. Задай мне любой вопрос о возможностях для студентов!",
            isUser: false,
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatMessagesRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (smooth = true) => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTo({
                top: chatMessagesRef.current.scrollHeight,
                behavior: smooth ? "smooth" : "auto"
            });
        }
    };

    useEffect(() => {
        if (window.innerWidth < 3048) {
            if (messages.length === 1) {
                scrollToBottom(false);
            } else {
                scrollToBottom();
            }
        }
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const newUserMessage: Message = {
            id: messages.length + 1,
            text: inputValue,
            isUser: true,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        // Имитация ответа ИИ (пока заглушка)
        setTimeout(() => {
            const aiResponse: Message = {
                id: messages.length + 2,
                text: "Отличный вопрос! В данный момент я обучаюсь и скоро смогу помочь тебе с поиском подходящих грантов и конкурсов. Следи за обновлениями! 🚀",
                isUser: false,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="main-container">
            <main className="main-content">
                {/* Hero Section */}
                <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Проекту<span className="hero-accent">Да!</span>
                        </h1>
                        <p className="hero-subtitle">
                            Бери возможности в свои руки! <strong>ProectuDa AI</strong> — твой персональный помощник в мире грантов и конкурсов
                        </p>
                    </div>
                </section>

                {/* AI Chat Section */}
                <section className={`ai-chat-section ${isVisible ? 'slide-up' : ''}`}>
                    <div className="chat-container">
                        <div className="chat-header">
                            <div className="chat-header-content">
                                <div className="ai-avatar">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h3>ProectuDa AI</h3>
                                    <span className="status-indicator">
                                        <div className="status-dot"></div>
                                        В сети
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="chat-messages" ref={chatMessagesRef}>
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}
                                >
                                    <div className="message-content">
                                        <p>{message.text}</p>
                                        <span className="message-time">
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="message ai-message">
                                    <div className="message-content">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chat-input-container">
                            <div className="chat-input-wrapper">
                                <textarea
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Введите запрос"
                                    rows={1}
                                    className="chat-input"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    disabled={!inputValue.trim()}
                                    className="send-button"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className={`about-section ${isVisible ? 'fade-in-delayed' : ''}`}>
                    <div className="about-content">
                        <h2>О нашем проекте</h2>
                        <p className="about-description">
                            Мы — амбициозная группа студентов, которые прошли большой путь от неудач до побед
                            в сфере проектной деятельности и молодежного предпринимательства.
                        </p>

                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <Users size={28} />
                                </div>
                                <h3>Опытная команда</h3>
                                <p>Студенты с богатым опытом участия в конкурсах</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <Target size={28} />
                                </div>
                                <h3>Персональный подход</h3>
                                <p>ИИ помощник для каждого пользователя</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <Award size={28} />
                                </div>
                                <h3>Результат</h3>
                                <p>Помогаем использовать все меры поддержки</p>
                            </div>
                        </div>

                        <div className="cta-section">
                            <h3>Присоединяйся к нам и скажи проекту: "Да"!</h3>
                            <p>Используй все возможности для своего развития</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePageMain;