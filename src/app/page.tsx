'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isNotifyVisible, setIsNotifyVisible] = useState(true);

  return (
    <main>
      <br /><br /><br />
      {isNotifyVisible && (
        <div id="notify">
          <svg
            id="xc"
            onClick={() => setIsNotifyVisible(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
          <div>
            <Image src="/aviation-icon.png" alt="Aviation" width={100} height={100} style={{ borderRadius: '20px' }} />
            Aviation
            <button id="newS" onClick={() => window.location.href = 'https://al-sardi.github.io/aviation.github.io'}>
              Book a flight!
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <br />
      <div className="main-cards">
        <div className="section-zero">
          <span>
            <Image src="/pageIcon.png" alt="img" width={160} height={160} />
          </span>
          AI by Majed
          <span>
            <Link href="https://testing-agentic-workflow.onrender.com">
              <p>Agentic Workflow</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
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
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </span>
        </div>
        <br />
        <div className="section-three">
          <div>
            <Image src="/taschenrechner.png" alt="calculator" width={100} height={100} />
          </div>
          <div>
            <Link href="/taschenrechner">
              <p>Taschenrechner</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </div>
        </div>
        <br />
        <div className="section-four">
          <div>
            <h1>JS</h1>
          </div>
          <div>
            <Link href="/testing">
              <p>JS Manipulation</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </Link>
          </div>
        </div>
        <br />
      </div>
    </main>
  );
}
