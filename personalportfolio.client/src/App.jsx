import { useState, ViewTransition} from 'react';
import './App.css';
import { CreateContent } from './PageData';
import { PortfolioHeader } from './PageObjects';
import { NavBar } from './NavBar';

let pageCacheArray = [];
function onStartup(){ 
    // Initialize the array with keys and null values.
    // Caches contents for page, prevents re-rendering of components when switching between pages.
    pageCacheArray = [
        { key: 'featured-projects', value: null },
        { key: 'languages', value: null },
        { key: 'technical-highlights', value: null },
        { key: 'resume', value: null },
        { key: 'contacts', value: null },
        { key: 'education', value: null }
    ];

    for (let i = 0; i < pageCacheArray.length; i++) {
        const key = pageCacheArray[i].key;
        const value = CreateContent(key);   
        pageCacheArray[i].value = value;
    }
}
export function InitApp() {
    onStartup();
    const [open, setOpen] = useState('');
    const pageContent = pageCacheArray.find(item => item.key === open)?.value 

    return (
        <div>   
            <PortfolioHeader />
            <NavBar open={open} setOpen={setOpen} />

            {pageContent && (
                <ViewTransition key={open} enter="auto" exit="auto" update="cross-fade">
                    <div>{pageContent}</div>
                </ViewTransition>
            )}
        </div>
    );
}
