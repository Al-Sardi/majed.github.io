'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="ueberschrift">
                <Image src="/confluence.png" id="confluence" alt="img" width={40} height={40} />
                <Image src="/logo-al-sardi/svg/logo-no-background.svg" id="svgtitle" alt="img" width={247} height={30} priority />
            </div>
            <div className="nav-container">
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={isOpen}
                    onChange={() => setIsOpen(!isOpen)}
                />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>

                <div className="menu-items">
                    <ul>
                        <li><Link href="/" id="home-li" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/snakegame" onClick={() => setIsOpen(false)}>Snake</Link></li>
                        <li><Link href="/imgallery" onClick={() => setIsOpen(false)}>Bildergallerie</Link></li>
                        <li><Link href="/taschenrechner" onClick={() => setIsOpen(false)}>Taschenrechner</Link></li>
                        <li><Link href="/testing" onClick={() => setIsOpen(false)}>JS</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
