import { useState } from 'react';
import { StyleTest } from "./style-test";

export function App() {
    const [colorMode, setColorMode] = useState('light');

    return <div className={`root ${colorMode}`}>
        <header>
            <nav>
                <a href="/" className="brand">Maps and Gold</a>
                <button id="color-mode" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>Color Mode</button>
                <div>
                    <a href="/">Home</a>
                    <a href="/archive/">Archive</a>
                    <a href="/about/">About</a>
                </div>
            </nav>
        </header>
        <main><StyleTest/></main>
        <footer>© 2024 John Siddoway</footer>
    </div>
};