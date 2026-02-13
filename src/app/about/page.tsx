'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import './about.css';

export default function About() {
    useEffect(() => {
        // Progress Bar
        const updateProgressBar = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            const progressBar = document.getElementById('progressBar');
            if (progressBar) {
                progressBar.style.width = scrollPercentage + '%';
            }
        };

        // Intersection Observer - Fade In Animations
        const chapters = document.querySelectorAll('.chapter-content');
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        chapters.forEach(chapter => observer.observe(chapter));

        // Parallax Effect
        const handleScroll = () => {
            updateProgressBar();

            const images = document.querySelectorAll('.image-wrapper img');
            images.forEach(img => {
                const parent = img.closest('.chapter');
                if (!parent) return;

                const rect = parent.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight && rect.bottom > 0) {
                    const scrollPercentage = (windowHeight - rect.top) / (windowHeight + rect.height);
                    const parallaxOffset = scrollPercentage * 30;
                    (img as HTMLElement).style.transform = `translateY(${parallaxOffset}px) scale(1)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        updateProgressBar();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Progress Bar */}
            <div className="progress-bar" id="progressBar"></div>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Meine Reise</h1>
                    <p className="hero-subtitle">Von der Schulbank zur Softwareentwicklung – eine Geschichte über Lernen, Wachsen und Entdecken</p>
                    <div className="scroll-indicator">
                        <span>Scrolle, um mehr zu erfahren</span>
                        <div className="scroll-arrow">↓</div>
                    </div>
                </div>
            </section>

            {/* Chapter 1: Fundament */}
            <section className="chapter chapter-1" data-chapter="1">
                <div className="chapter-content">
                    <div className="chapter-text">
                        <span className="chapter-number">01</span>
                        <h2 className="chapter-title">Fundament</h2>
                        <div className="chapter-story">
                            <p>Es begann in Wuppertal am Carl-Fuhlrott-Gymnasium. Hier lernte ich nicht nur Mathematik und Physik, sondern vor allem: <strong>wie man lernt</strong>.</p>
                            <p>Selbstdisziplin war keine Theorie, sondern Praxis. Jede Klausur, jedes Projekt verlangte Struktur und Konsequenz. Diese Jahre formten meine Arbeitsweise und legten das <strong>Fundament</strong> für alles Kommende.</p>
                            <p>Die Grundlagen sind das Wichtigste – nicht das Auswendiglernen, sondern das <strong>Verstehen</strong>. Diese Erkenntnis begleitet mich bis heute.</p>
                        </div>
                        <div className="chapter-tags">
                            <span className="tag">Selbstdisziplin</span>
                            <span className="tag">Grundlagen</span>
                            <span className="tag">Lernen lernen</span>
                        </div>
                    </div>
                    <div className="chapter-image">
                        <div className="image-wrapper">
                            <Image src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop" alt="Bildung und Fundament" width={1200} height={800} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 2: Prägungsjahre */}
            <section className="chapter chapter-2" data-chapter="2">
                <div className="chapter-content reverse">
                    <div className="chapter-image">
                        <div className="image-wrapper">
                            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop" alt="Persönliche Entwicklung" width={1200} height={800} />
                        </div>
                    </div>
                    <div className="chapter-text">
                        <span className="chapter-number">02</span>
                        <h2 className="chapter-title">Prägungsjahre</h2>
                        <div className="chapter-story">
                            <p>Die Jahre nach der Schule waren eine Zeit der <strong>Orientierung</strong>. Wer bin ich? Was interessiert mich wirklich? Welchen Weg will ich gehen?</p>
                            <p>In dieser Phase entdeckte ich meine Leidenschaft für Technologie und Innovation. Nicht als oberflächliches Interesse, sondern als echte <strong>Berufung</strong>.</p>
                            <p>Diese Prägungsjahre formten meine Persönlichkeit und richteten meinen Kompass aus – in Richtung Wirtschaftsinformatik, Innovation und digitale Transformation.</p>
                        </div>
                        <div className="chapter-tags">
                            <span className="tag">Persönliche Entwicklung</span>
                            <span className="tag">Orientierung</span>
                            <span className="tag">Interessenbildung</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 3: Theorie trifft Praxis */}
            <section className="chapter chapter-3" data-chapter="3">
                <div className="chapter-content">
                    <div className="chapter-text">
                        <span className="chapter-number">03</span>
                        <h2 className="chapter-title">Theorie trifft Praxis</h2>
                        <div className="chapter-story">
                            <p>Der Schritt ins duale Studium an der DHBW war ein <strong>Wendepunkt</strong>. Plötzlich war ich nicht mehr nur Lernender, sondern aktiver Gestalter.</p>
                            <p>Die Wirtschaftsinformatik erwies sich als perfekte Symbiose: Business-Verständnis trifft technische Umsetzung. Jedes Semester brachte neue Herausforderungen – und mit ihnen die Chance, <strong>Wissen anzuwenden</strong>.</p>
                            <p>Eigenverantwortung wurde zur Normalität. Probleme lösen, Konzepte verstehen, umsetzen – dieser Zyklus prägt mein Studium bis heute.</p>
                        </div>
                        <div className="chapter-tags">
                            <span className="tag">DHBW</span>
                            <span className="tag">Eigenverantwortung</span>
                            <span className="tag">Problemlösen</span>
                        </div>
                    </div>
                    <div className="chapter-image">
                        <div className="image-wrapper">
                            <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop" alt="Studium und Praxis" width={1200} height={800} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 4: Tool-Experience */}
            <section className="chapter chapter-4" data-chapter="4">
                <div className="chapter-content reverse">
                    <div className="chapter-image">
                        <div className="image-wrapper">
                            <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop" alt="Tools und Technologie" width={1200} height={800} />
                        </div>
                    </div>
                    <div className="chapter-text">
                        <span className="chapter-number">04</span>
                        <h2 className="chapter-title">Die Werkzeuge des Handwerks</h2>
                        <div className="chapter-story">
                            <p>Code ist mehr als Syntax. Professionelles Arbeiten beginnt mit den <strong>richtigen Werkzeugen</strong>.</p>
                            <p>Von VS Code über Git bis hin zu modernen Deployment-Plattformen – jedes Tool brachte neue Effizienz. Versionskontrolle, strukturierte Workflows, automatisierte Prozesse: Das sind keine Extras, sondern <strong>Standard</strong>.</p>
                            <p>Diese Phase lehrte mich: Gute Tools verstärken gute Ideen. Und Struktur ist die Grundlage für Kreativität.</p>
                        </div>
                        <div className="chapter-tools">
                            <div className="tool-badge">JavaScript</div>
                            <div className="tool-badge">Python</div>
                            <div className="tool-badge">React</div>
                            <div className="tool-badge">Next.js</div>
                            <div className="tool-badge">Git</div>
                            <div className="tool-badge">Figma</div>
                            <div className="tool-badge">VS Code</div>
                            <div className="tool-badge">Vercel</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 5: KI als Chance */}
            <section className="chapter chapter-5" data-chapter="5">
                <div className="chapter-content">
                    <div className="chapter-text">
                        <span className="chapter-number">05</span>
                        <h2 className="chapter-title">KI als Chance</h2>
                        <div className="chapter-story">
                            <p>Künstliche Intelligenz ist kein Ersatz – sie ist ein <strong>Verstärker</strong>. Ein Werkzeug, das menschliche Fähigkeiten potenziert, nicht ersetzt.</p>
                            <p>Dieser Perspektivwechsel war entscheidend: KI nicht als Bedrohung sehen, sondern als <strong>Chance</strong>. Als Möglichkeit, kreativer, effizienter und innovativer zu arbeiten.</p>
                            <p>Das richtige Mindset macht den Unterschied. Technologie dient dem Menschen – nicht umgekehrt. Diese Erkenntnis prägt meine Arbeit mit modernen Tools bis heute.</p>
                        </div>
                        <div className="chapter-tags">
                            <span className="tag">KI & Automation</span>
                            <span className="tag">Mindset</span>
                            <span className="tag">Human-Centered Tech</span>
                        </div>
                    </div>
                    <div className="chapter-image">
                        <div className="image-wrapper">
                            <Image src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop" alt="KI und Innovation" width={1200} height={800} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 6: Heute & Ausblick */}
            <section className="chapter chapter-6" data-chapter="6">
                <div className="chapter-content reverse">
                    <div className="chapter-image">
                        <div className="image-wrapper">
                            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop" alt="Zukunft und Ausblick" width={1200} height={800} />
                        </div>
                    </div>
                    <div className="chapter-text">
                        <span className="chapter-number">06</span>
                        <h2 className="chapter-title">Heute & Ausblick</h2>
                        <div className="chapter-story">
                            <p>Heute stehe ich an einem spannenden Punkt meiner Reise. Zwischen Wuppertal, Düsseldorf und Villingen-Schwenningen verbinde ich <strong>Theorie und Praxis</strong> täglich.</p>
                            <p>Meine Neugierde ist ungebrochen. Moderne Webarchitekturen, KI-Integration, UX-Design – die Technologiewelt entwickelt sich rasant. Und ich entwickle mich mit ihr.</p>
                            <p>Was als Schulprojekt begann, ist zu einer Leidenschaft geworden. Die Geschichte ist noch lange nicht zu Ende – <strong>sie wird gerade erst richtig spannend</strong>.</p>
                        </div>
                        <div className="chapter-cta">
                            <Link href="/" className="btn-primary">Zurück zur Startseite</Link>
                            <Link href="https://www.linkedin.com/in/majed-al-sardi-80671730b/" className="btn-secondary" target="_blank">LinkedIn besuchen</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="about-footer">
                <p>© 2026 Majed Al-Sardi · Dualer Student | DHBW Wirtschaftsinformatik (B.Sc.)</p>
            </footer>
        </>
    );
}
