import { useState, ViewTransition} from 'react';
import './App.css';
import { CreateContent } from './PageData';
import { PortfolioHeader } from './PageObjects/PageObjects';
import { NavBar } from './NavBar';

export function InitApp() {
    const [open, setOpen] = useState('');
    const pageContent = CreateContent(open);

    return (
        <div>   
            <PortfolioHeader />
            <NavBar open={open} setOpen={setOpen} />

            <ViewTransition key={open} enter="auto" exit="auto" update="cross-fade">
                <div>{pageContent}</div>
            </ViewTransition>
        </div>
    );
}
