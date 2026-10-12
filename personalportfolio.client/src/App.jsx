import { useEffect, useState } from 'react';
import './App.css';
import ProjectThumbnail from './ProjectThumbnail';

export function InitApp() {
    const [projects, setProjects] = useState();
    const [newView, setNewView] = useState(false);

    useEffect(() => {
        populateProjects();
    }, []);

    const newViewContents = projects === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        :
        <div className="thumbnail-holder">
            {projects.map(project =>
                <ProjectThumbnail key={project.projectId} project={project} />
            )}
        </div>;

    return (
        <div>
            <h1 id="tableLabel">Portfolio Projects</h1>
            <p>This component demonstrates fetching data from the server.</p>

            <button onClick={() => setNewView(!newView)}>
                {newView ? 'Hide' : 'Load'} Portfolio
            </button>
            {newView && newViewContents}
        </div>
    );

    async function populateProjects() {
        const response = await fetch('projects');
        if (response.ok) {
            const data = await response.json();
            setProjects(data);
        }
    }
}
