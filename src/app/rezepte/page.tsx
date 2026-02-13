'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Rezepte() {
    const [activeRecipe, setActiveRecipe] = useState('thuna-pasta');

    const recipes = {
        'thuna-pasta': {
            title: 'Thuna-Pasta',
            emoji: '🍝',
            difficulty: 'Einfach',
            time: '25 Min',
            servings: '2 Portionen',
            ingredients: [
                'Vollkorn Penne',
                'Passierte Tomaten Pack',
                'Tunfisch Dose',
                'Knorr Delikatess Brühe'
            ],
            stepsNudeln: [
                'Heißes Wasser in den Topf',
                'Sonnenblumenöl hinzufügen',
                'Herd auf 9 stellen',
                'Nudeln hinzufügen (egal welche)',
                'Deckel NICHT zumachen! (Anders als bei Reis)',
                'Umrühren und kochen lassen (zeitweise)',
                'Beim Kochen gelegentlich umrühren',
                'Weiter kochen lassen',
                'Dann in den Sieb gießen',
                'Ein wenig Olivenöl in den Topf und Nudeln wieder hinein',
                'Umrühren und Fertig!'
            ],
            stepsSosse: [
                'Olivenöl in die Pfanne geben',
                '1 Dose Thunfisch hinzufügen',
                'Optional: Schwarze Oliven hinzufügen',
                'Ein wenig Knorr Delikatess Brühe',
                'Frisches Basilikum dazugeben',
                'Herd auf 9 stellen & gelegentlich umrühren',
                '1 Pack passierte Tomaten (Aldi!)',
                'Gut umrühren',
                'Aufblubbern lassen → dann Herd auf 2 reduzieren'
            ]
        }
    };

    const currentRecipe = recipes[activeRecipe];

    return (
        <>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                .recipe-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
                    font-family: 'Poppins', sans-serif;
                    position: relative;
                }

                .recipe-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: url('data:image/svg+xml,<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>');
                    opacity: 0.3;
                }

                .header {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    padding: 20px 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                }

                .back-button {
                    color: #667eea;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                    padding: 12px 24px;
                    border-radius: 50px;
                    background: rgba(102, 126, 234, 0.1);
                    font-weight: 600;
                }

                .back-button:hover {
                    background: rgba(102, 126, 234, 0.2);
                    transform: translateX(-3px);
                }

                .header-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .main-content {
                    margin-top: 100px;
                    padding: 40px 20px 60px;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                    position: relative;
                }

                .recipe-hero {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border-radius: 30px;
                    padding: 60px 40px;
                    margin-bottom: 40px;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
                }

                .recipe-emoji {
                    font-size: 6rem;
                    margin-bottom: 20px;
                    display: inline-block;
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }

                .recipe-title {
                    font-size: 3.5rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    margin-bottom: 20px;
                }

                .recipe-meta {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    flex-wrap: wrap;
                    margin-top: 30px;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 24px;
                    background: rgba(102, 126, 234, 0.1);
                    border-radius: 50px;
                    font-weight: 500;
                    color: #667eea;
                }

                .meta-icon {
                    font-size: 1.2rem;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 30px;
                }

                .section {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border-radius: 25px;
                    padding: 40px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
                    transition: all 0.3s ease;
                }

                .section:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
                }

                .section-title {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-bottom: 25px;
                    color: #2d3748;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding-bottom: 15px;
                    border-bottom: 3px solid;
                    border-image: linear-gradient(90deg, #667eea 0%, #764ba2 100%) 1;
                }

                .emoji-icon {
                    font-size: 1.8rem;
                }

                .ingredients-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 15px;
                }

                .ingredient-card {
                    background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
                    padding: 20px;
                    border-radius: 15px;
                    border: 2px solid transparent;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .ingredient-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }

                .ingredient-card:hover::before {
                    left: 100%;
                }

                .ingredient-card:hover {
                    border-color: #667eea;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
                }

                .ingredient-name {
                    font-weight: 600;
                    color: #2d3748;
                    font-size: 1.05rem;
                }

                .steps-list {
                    counter-reset: step-counter;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .step-item {
                    counter-increment: step-counter;
                    padding: 20px 20px 20px 75px;
                    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
                    border-radius: 15px;
                    position: relative;
                    transition: all 0.3s ease;
                    line-height: 1.6;
                    color: #2d3748;
                }

                .step-item:hover {
                    background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
                    transform: translateX(5px);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
                }

                .step-item::before {
                    content: counter(step-counter);
                    position: absolute;
                    left: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 1.1rem;
                    box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
                }

                @media (max-width: 768px) {
                    .recipe-title {
                        font-size: 2.5rem;
                    }

                    .section-title {
                        font-size: 1.6rem;
                    }

                    .ingredients-grid {
                        grid-template-columns: 1fr;
                    }

                    .recipe-meta {
                        gap: 15px;
                    }

                    .section {
                        padding: 25px;
                    }

                    .recipe-hero {
                        padding: 40px 25px;
                    }
                }
            `}</style>

            <div className="recipe-container">
                {/* Header */}
                <header className="header">
                    <Link href="/" className="back-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Zurück
                    </Link>
                    <div className="header-title">🍽️ Meine Rezepte</div>
                    <div style={{width: '100px'}}></div>
                </header>

                {/* Main Content */}
                <main className="main-content">
                    {/* Recipe Hero */}
                    <div className="recipe-hero">
                        <div className="recipe-emoji">{currentRecipe.emoji}</div>
                        <h1 className="recipe-title">{currentRecipe.title}</h1>
                        <div className="recipe-meta">
                            <div className="meta-item">
                                <span className="meta-icon">⏱️</span>
                                {currentRecipe.time}
                            </div>
                            <div className="meta-item">
                                <span className="meta-icon">👥</span>
                                {currentRecipe.servings}
                            </div>
                            <div className="meta-item">
                                <span className="meta-icon">📊</span>
                                {currentRecipe.difficulty}
                            </div>
                        </div>
                    </div>

                    <div className="content-grid">
                        {/* Zutaten */}
                        <section className="section">
                            <h2 className="section-title">
                                <span className="emoji-icon">🛒</span>
                                Zutaten
                            </h2>
                            <div className="ingredients-grid">
                                {currentRecipe.ingredients.map((ingredient, index) => (
                                    <div key={index} className="ingredient-card">
                                        <div className="ingredient-name">{ingredient}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Zubereitung Nudeln */}
                        <section className="section">
                            <h2 className="section-title">
                                <span className="emoji-icon">🍝</span>
                                Zubereitung Nudeln
                            </h2>
                            <ol className="steps-list">
                                {currentRecipe.stepsNudeln.map((step, index) => (
                                    <li key={index} className="step-item">
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </section>

                        {/* Zubereitung Soße */}
                        <section className="section">
                            <h2 className="section-title">
                                <span className="emoji-icon">🍅</span>
                                Zubereitung Soße
                            </h2>
                            <ol className="steps-list">
                                {currentRecipe.stepsSosse.map((step, index) => (
                                    <li key={index} className="step-item">
                                        {step}
                                    </li>
                                ))}
                            </ol>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}

