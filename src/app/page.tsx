'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {

  return (
    <main>
      <br /><br /><br />
      <div className="main-cards">
        <div className="section-linkedin">
          <span>
            <Image src="/myLinkedin.jpeg" alt="LinkedIn" width={100} height={100} style={{ borderRadius: '20px' }} />
          </span>
          Über mich
          <span>
            <button onClick={() => window.location.href = '/about'}>
              Meine Reise
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </span>
        </div>
        <div className="section-zero">
          <span>
            <Image src="/icons8-barde-94.png" alt="img" width={160} height={160} />
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

        <div className="section-two">
          <span>
            <Image src="https://img.icons8.com/?size=100&id=6UAzt0EzJA3d&format=png&color=000000" alt="Rezepte" width={160} height={160} />
          </span>

          <span>
            <Link href="/rezepte">
              <p>Meine Rezepte</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </span>
        </div>

        <div className="section-three">
          <span>
            <Image src="https://img.icons8.com/?size=100&id=RnMbj3WtSucc&format=png&color=000000" alt="New AI Project" width={160} height={160} />
          </span>
          New AI Project
          <span>
            <button onClick={() => {}}>
              Coming Soon
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </main>
  );
}
