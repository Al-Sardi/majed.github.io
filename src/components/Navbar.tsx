'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    if (!isHomePage) return null;

    return (
        <nav className="navbar">
            <div className="ueberschrift">
                <Image src="/confluence.png" id="confluence" alt="img" width={40} height={40} />
                <Image src="/logo-al-sardi/svg/logo-no-background.svg" id="svgtitle" alt="img" width={247} height={30} priority />
            </div>
        </nav>
    );
};

export default Navbar;
