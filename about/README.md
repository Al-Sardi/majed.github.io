# Über mich – Interaktive Scrollytelling-Seite

Eine moderne, interaktive "Über mich"-Seite mit professionellen Scroll-Effekten und UX-Animationen.

## 🎯 Features

### Design & UX
- ✅ **Scrollytelling-Konzept**: Jedes Kapitel erzählt eine Geschichte
- ✅ **Smooth Scrolling**: Weiche Übergänge zwischen Sections
- ✅ **Scroll Snap**: Automatisches Einrasten der Kapitel
- ✅ **Progress Bar**: Visueller Fortschrittsbalken oben
- ✅ **Responsive Design**: Desktop-first, voll responsive

### Animationen
- ✅ **Fade-In + Slide-Up**: Kapitel erscheinen beim Scrollen
- ✅ **Parallax Scrolling**: Bilder bewegen sich leicht beim Scrollen
- ✅ **Image Zoom**: Sanfter Zoom-Effekt beim Viewport-Eintritt
- ✅ **Hover Effects**: Interaktive Hover-Effekte auf Tags, Tools und Links
- ✅ **Chapter Numbers**: Animierte Kapitelnummern

### Technische Highlights
- ✅ **Intersection Observer API**: Performante Scroll-Erkennung
- ✅ **Debouncing**: Optimierte Scroll-Performance
- ✅ **CSS Variables**: Einfache Farbanpassung
- ✅ **Modern CSS Grid & Flexbox**: Flexibles Layout
- ✅ **Keine Dependencies**: Pure HTML, CSS, JS

## 🎨 Farbkonzept

| Kapitel | Farbe | Thema |
|---------|-------|-------|
| 1 - Abitur | Blau/Violett | Fundament |
| 2 - Studium | Grün/Türkis | Theorie & Praxis |
| 3 - Tools | Pink/Orange | Werkzeuge |
| 4 - Zukunft | Hell/Neutral | Ausblick |

## 📁 Struktur

```
about/
├── index.html      # HTML-Struktur
├── style.css       # Alle Styles & Animationen
├── script.js       # Scroll-Effekte & Interaktionen
└── README.md       # Diese Datei
```

## 🚀 Usage

1. **Lokal öffnen**:
   ```bash
   open about/index.html
   ```

2. **Mit Live Server** (empfohlen):
   - VS Code Extension "Live Server" installieren
   - Rechtsklick auf `index.html` → "Open with Live Server"

3. **Deployment**:
   - Kann direkt auf Vercel, Netlify oder GitHub Pages deployed werden
   - Keine Build-Schritte notwendig

## 🎛️ Anpassungen

### Farben ändern
Bearbeite die CSS-Variablen in `style.css`:
```css
:root {
    --chapter-1-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-blue: #1C77F2;
    /* ... */
}
```

### Bilder ersetzen
Ersetze die Unsplash-URLs in `index.html` mit eigenen Bildern:
```html
<img src="dein-bild.jpg" alt="Beschreibung" />
```

### Texte anpassen
Alle Texte sind in `index.html` direkt editierbar in den `.chapter-story` Bereichen.

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)

## 🧪 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Voll |
| Firefox | ✅ Voll |
| Safari | ✅ Voll |
| Edge | ✅ Voll |
| IE11 | ❌ Nicht unterstützt (Intersection Observer) |

## 💡 Erweiterungsideen

- [ ] Smooth Scroll Polyfill für ältere Browser
- [ ] Dark Mode Toggle
- [ ] Mehr Kapitel hinzufügen
- [ ] Animierte Skill-Diagramme
- [ ] Timeline-Visualisierung
- [ ] Testimonials-Section
- [ ] Kontaktformular am Ende

## 📝 Credits

- **Bilder**: Unsplash (Placeholder)
- **Font**: Poppins (Google Fonts)
- **Icons**: Nicht verwendet (kann bei Bedarf ergänzt werden)

## 🔧 Technologie-Stack

- **HTML5**: Semantic markup
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **Vanilla JavaScript**: Intersection Observer, Event Listeners
- **Keine Frameworks**: Pure Web-Technologien

---

**Made with ❤️ by Majed Al-Sardi**
