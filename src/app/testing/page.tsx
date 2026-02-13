'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Testing = () => {
    const [name, setName] = useState('');
    const [isStarted, setIsStarted] = useState(false);
    const [bgColor, setBgColor] = useState('#111416');
    const [textColor, setTextColor] = useState('#ffffff');
    const [fontSize, setFontSize] = useState(15);
    const [fontWeight, setFontWeight] = useState(100);
    const [heading, setHeading] = useState('');

    const colorArray = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#4B0082", "#EE82EE", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF", "#FFC0CB", "#FF6347", "#00FF00", "#8A2BE2", "#808080", "#FF4500", "#FFD700", "#ADFF2F", "#2E8B57", "#800000", "#FF69B4", "#CD853F", "#4B0082", "#8B008B", "#00BFFF", "#008080", "#DC143C", "#FFFF00", "#00FF7F", "#DA70D6", "#D2B48C", "#A52A2A", "#FFFACD", "#808000", "#FF1493", "#7CFC00", "#9932CC", "#FF8C00", "#BDB76B", "#FF00FF", "#6A5ACD", "#FFDAB9", "#8B0000", "#FF7F50", "#FF4500", "#00FA9A", "#8FBC8F", "#FFFAF0", "#FA8072", "#D2691E", "#C71585", "#FAEBD7", "#D3D3D3", "#FF69B4", "#FFFFE0", "#FFE4E1", "#DEB887", "#F0FFF0", "#BA55D3", "#F5DEB3", "#F0E68C", "#7FFFD4", "#FF8C69", "#EEE8AA", "#FFF0F5", "#F08080", "#87CEEB", "#9370DB", "#FFF5EE", "#E6E6FA", "#3CB371", "#B0E0E6", "#FFFAFA", "#D8BFD8", "#FFB6C1", "#FDF5E6", "#FFE4B5", "#FFDEAD", "#FAF0E6", "#FFF8DC", "#FFEBCD", "#F5F5DC", "#F8F8FF", "#F0FFFF", "#FFF0F5", "#FFFAF0", "#FDF5E6", "#FFF5EE", "#F5FFFA", "#F0F8FF", "#FAEBD7", "#FAFAD2", "#FAF0E6", "#F5DEB3", "#FFEFD5", "#FFE4C4", "#FFE4E1", "#FFF0F5", "#FFFFF0", "#F0FFF0", "#FFF5EE", "#F5FFFA", "#F0FFFF", "#FAF0E6", "#FFFACD", "#FAFAD2", "#FAEBD7", "#FFE4C4", "#FFEBCD", "#FFF0F5", "#FFFFF0", "#F0FFF0", "#F5FFFA", "#F0FFFF", "#FAF0E6", "#FFFACD", "#FAFAD2", "#FAEBD7", "#FFE4C4", "#FFEBCD", "#FFF0F5", "#FFFFF0", "#F0FFF0", "#F5FFFA", "#F0FFFF", "#FAF0E6", "#FFFACD", "#FAFAD2"];

    const handleStart = () => {
        const userName = prompt("Wie heißt du?");
        if (userName) {
            setName(userName);
            setHeading(`Hallo ${userName}`);
            setIsStarted(true);
        }
    };

    const changeBg = () => {
        const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        setBgColor(randomColor);
    };

    const changeTextColor = () => {
        const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        setTextColor(randomColor);
    };

    const changeHeading = () => {
        const newTitle = prompt("Neuer Titel: ");
        if (newTitle) setHeading(newTitle);
    };

    return (
        <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh', transition: 'background-color 0.3s, color 0.3s', fontSize: `${fontSize}px`, fontWeight: fontWeight }}>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    padding: 10px;
                    border-bottom: 1px solid #444;
                }
                #startbutton {
                    background-color: #212529;
                    color: #fff;
                    padding: 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 50px auto;
                    width: 200px;
                }
                main {
                    padding: 30px;
                    display: ${isStarted ? 'block' : 'none'};
                }
                section {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px;
                    background-color: rgba(255,255,255,0.1);
                    margin-bottom: 10px;
                    border-radius: 10px;
                }
                button {
                    background-color: #212529;
                    color: #fff;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .minus-plus-font-btns {
                    margin-left: 10px;
                    width: 40px;
                }
            `}</style>
            <header style={{ marginTop: '62px' }}>
                <div className="left">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16" style={{ color: '#fff' }}>
                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </Link>
                </div>
                <div className="mid">
                    <h1 id="page-heading">{heading}</h1>
                </div>
                <div className="right">
                    <Image src="/colorbucket.png" alt="img" width={30} height={30} />
                </div>
            </header>

            {!isStarted && (
                <div id="preMain">
                    <button id="startbutton" onClick={handleStart}>
                        <p>Start</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                            <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            )}

            <main id="main">
                <section>
                    <div className="left">Hintergrundfarbe ändern</div>
                    <div className="right">
                        <button onClick={changeBg}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </section>
                <section>
                    <div className="left">Schriftfarbe ändern</div>
                    <div className="right">
                        <button onClick={changeTextColor}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </section>
                <section>
                    <div className="left">Schriftgröße ändern</div>
                    <div>
                        <button className="minus-plus-font-btns" onClick={() => setFontSize(prev => prev - 1)}>-</button>
                        <button className="minus-plus-font-btns" onClick={() => setFontSize(prev => prev + 1)}>+</button>
                    </div>
                </section>
                <section>
                    <div className="left">Schriftdicke ändern</div>
                    <div>
                        <button className="minus-plus-font-btns" onClick={() => setFontWeight(prev => Math.max(100, prev - 100))}>-</button>
                        <button className="minus-plus-font-btns" onClick={() => setFontWeight(prev => Math.min(900, prev + 100))}>+</button>
                    </div>
                </section>
                <section>
                    <div className="left">Titel ändern</div>
                    <div className="right">
                        <button onClick={changeHeading}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Testing;
