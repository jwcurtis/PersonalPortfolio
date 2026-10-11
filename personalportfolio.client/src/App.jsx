import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [projects, setProjects] = useState();

    useEffect(() => {
        populateProjects();
    }, []);

    const contents = projects === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Project Type</th>
                    <th>Project Description</th>
                    <th>Date Completed</th>
                    <th>Last Updated</th>
                    <th>Project Link</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project =>
                    <tr key={project.projectName}>      
                        <td>{project.projectName}</td>           
                        <td>{project.projectType}</td>
                        <td>{project.projectDescription}</td>
                        <td>{project.dateCompleted}</td>
                        <td>{project.lastUpdated}</td>
                        <td>{project.projectLink}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tableLabel">Portfolio Projects</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
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

export default App;