import { useState, startTransition, ViewTransition} from 'react';
import './App.css';
import { ReturnContent } from './PageData';

export function InitApp() {
    const [open, setOpen] = useState('');
    const pageContent = ReturnContent(open);

    let header = (<h1>Jacob Curtis</h1>);
    let title = (<h2>Software Engineer</h2>)

    return (
        <div>   
            {header}
            {title}
            <div className = "navbar">

                <button onClick={() => startTransition(() => setOpen('featured-projects'))}>
                    {open === 'featured-projects' ? 'Showing' : 'Open'} Featured Projects
                </button>

                <button onClick={() => startTransition(() => setOpen('languages'))}>
                    {open === 'languages' ? 'Showing' : 'Open'} Languages & Frameworks
                </button>

                <button onClick={() => startTransition(() => setOpen('technical-highlights'))}>
                    {open === 'technical-highlights' ? 'Showing' : 'Open'} Technical Highlights
                </button>

                <button onClick={() => startTransition(() => setOpen('resume'))}>
                    {open === 'resume' ? 'Showing' : 'Open'} Resume
                </button>

                <button onClick={() => startTransition(() => setOpen('contacts'))}>
                    {open === 'contacts' ? 'Showing' : 'Open'} Contacts & Links
                </button>

                <button onClick={() => startTransition(() => setOpen('education'))}>
                    {open === 'education' ? 'Showing' : 'Open'} Education & Certifications
                </button>

                
            </div>

            <div className="content">
                {pageContent && (
                    <ViewTransition key={open} enter="auto" exit="auto" update="cross-fade">
                        <div>{pageContent}</div>
                    </ViewTransition>
                )}
            </div>
        </div>
    );
}
