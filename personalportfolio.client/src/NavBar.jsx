 import { startTransition } from 'react';

function NavButton({ label, onClick }) {
    return (
        <button className = "nav-button" onClick={onClick}>
            {label}
        </button>
    );

}
export function NavBar({ open, setOpen }) {
    return(
    <div className = "navbar">
        
        <NavButton label = "Featured Projects" isOpen={open === 'featured-projects'}
        onClick={() => startTransition(() => setOpen('featured-projects'))} />
        
        <NavButton label = "Languages & Frameworks" isOpen={open === 'languages'}
        onClick={() => startTransition(() => setOpen('languages'))} />

        <NavButton label = "Technical Highlights" isOpen={open === 'technical-highlights'}
        onClick={() => startTransition(() => setOpen('technical-highlights'))} />

        <NavButton label = "Resume" isOpen={open === 'resume'}
        onClick={() => startTransition(() => setOpen('resume'))} /> 

        <NavButton label = "Contacts & Links" isOpen={open === 'contacts'}
        onClick={() => startTransition(() => setOpen('contacts'))} />

        <NavButton label = "Education & Certifications" isOpen={open === 'education'}
        onClick={() => startTransition(() => setOpen('education'))} />
    </div>
    );
}

