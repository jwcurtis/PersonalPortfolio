import { useState } from 'react';
import './App.css';
import { ReturnContent } from './PageData';

export function InitApp() {
    const [open, setOpen] = useState('');
    const pageContent = ReturnContent(open);

    return (
        <body>
            <h1 id="tableLabel">Jacob Curtis</h1>
            <h2>Software Engineer</h2>
            <div className = "navbar">

                <button onClick={() => setOpen('featured-projects')}>
                    {open === 'featured-projects' ? 'Showing' : 'Open'} Featured Projects
                </button>

                <button onClick={() => setOpen('languages')}>
                    {open === 'languages' ? 'Showing' : 'Open'} Languages & Frameworks
                </button>

                <button onClick={() => setOpen('technical-highlights')}>
                    {open === 'technical-highlights' ? 'Showing' : 'Open'} Technical Highlights
                </button>

                <button onClick={() => setOpen('resume')}>
                    {open === 'resume' ? 'Showing' : 'Open'} Resume
                </button>

                <button onClick={() => setOpen('contacts')}>
                    {open === 'contacts' ? 'Showing' : 'Open'} Contacts & Links
                </button>

                <button onClick={() => setOpen('education')}>
                    {open === 'education' ? 'Showing' : 'Open'} Education & Certifications
                </button>
            </div>

            <div className="content">
                {pageContent}
            </div>
        </body>
    );
}
