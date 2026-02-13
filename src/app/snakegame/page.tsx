'use client';

import Link from 'next/link';
import Image from 'next/image';

const SnakeGame = () => {
    return (
        <>
            <style jsx>{`
                header {
                    background-color: #111416;
                    padding: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: solid 1px #fff;
                }
                .left a {
                    color: #fff;
                }
                .mid h1 {
                    font-size: 1.5rem;
                }
                .right img {
                    width: 30px;
                }
                main {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .snake-settings {
                    margin-top: 20px;
                    color: #adb5bd;
                    font-style: italic;
                }
                #game-area {
                    width: 300px;
                    height: 300px;
                    border: 1px solid #495057;
                    margin-top: 20px;
                    background-color: #000;
                }
            `}</style>
            <header style={{ marginTop: '62px' }}>
                <div className="left">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </Link>
                </div>
                <div className="mid">
                    <h1>Snake!</h1>
                </div>
                <div className="right">
                    <Image src="/snake.png" alt="snake" width={30} height={30} />
                </div>
            </header>
            <main>
                <div className="snake-settings">
                    Settings (WIP)
                </div>
                <div id="game-area">
                </div>
            </main>
        </>
    );
};

export default SnakeGame;
