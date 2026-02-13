'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Imgallery = () => {
    const [counter, setCounter] = useState(1);
    const totalImages = 9;

    const nextImg = () => {
        setCounter(prev => (prev >= totalImages ? 1 : prev + 1));
    };

    const prevImg = () => {
        setCounter(prev => (prev <= 1 ? totalImages : prev - 1));
    };

    return (
        <>
            <style jsx>{`
                header {
                    background-color: #111416;
                    padding: 15px;
                    display: block;
                    width: 100%;
                }
                .content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1050px;
                    margin: auto;
                }
                .mid h1 {
                    font-size: 1.5rem;
                }
                .right img {
                    width: 30px;
                }
                main {
                    padding: 20px;
                }
                .img-slide {
                    width: 100%;
                    height: 400px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 30px;
                    background-color: #000;
                    overflow: hidden;
                }
                .img-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .controls {
                    display: flex;
                    justify-content: center;
                    gap: 50px;
                    padding-top: 20px;
                }
                .controls div a {
                    background-color: #212529;
                    padding: 10px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                }
            `}</style>
            <header style={{ marginTop: '62px' }}>
                <div className="content">
                    <div className="left">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="mid">
                        <h1>Bildergallerie</h1>
                    </div>
                    <div className="right">
                        <Image src="/gallery.png" alt="img" width={30} height={30} />
                    </div>
                </div>
            </header>
            <main>
                <div className="main-content">
                    <br />
                    <div className="img-slide">
                        <img id="displayed-img" src={`/imgs-for-slide/d${counter}.jpg`} alt={`Slide ${counter}`} />
                    </div>
                    <div className="controls">
                        <div className="left">
                            <button onClick={prevImg} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <div style={{ backgroundColor: '#212529', padding: '10px', borderRadius: '50%', color: '#fff' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="right">
                            <button onClick={nextImg} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                <div style={{ backgroundColor: '#212529', padding: '10px', borderRadius: '50%', color: '#fff' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Imgallery;
