'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <main>
      <br /><br /><br />
      <div className="main-cards">
        <div className="section-one">
          <span>
            <Image src="/aviation-card.png" alt="Aviation" width={100} height={100} style={{ borderRadius: '20px' }} />
          </span>
          Aviation
          <span>
            <button id="newS" onClick={() => window.location.href = 'https://al-sardi.github.io/aviation.github.io'}>
              Book a flight!
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </span>
        </div>
        <div className="section-zero">
          <span>
            <Image src="/pageIcon.png" alt="img" width={160} height={160} />
          </span>

          <span>
            <Link href="https://testing-agentic-workflow.onrender.com">
              <p>AI by Majed </p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </span>
        </div>

        <div className="section-two">
          <span>
            <Image src="/unsplash_laptop.jpg" alt="img" width={160} height={160} />
          </span>
          <span>
            <Link href="/imgallery">
              <p>Bildergallerie</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </span>
        </div>

        <div className="section-three">
          <div>
            <Image src="/taschenrechner.png" alt="calculator" width={100} height={100} />
          </div>
          <div>
            <Link href="/taschenrechner">
              <p>Taschenrechner</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="section-four">
          <div>
            <h1>JS</h1>
          </div>
          <div>
            <Link href="/testing">
              <p>JS Manipulation</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
