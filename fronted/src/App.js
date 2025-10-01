import React, { useState, useEffect } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // The '/api/tasks' URL is proxied by NGINX to the backend service
        fetch('/api/tasks')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setTasks(data))
            .catch(error => {
                console.error("Error fetching tasks:", error);
                setError("Could not load tasks from the backend.");
            });
    }, []);

    return (
        <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px' }}>
            <h1>MERN Task Board</h1>
            <h2>Tasks from API:</h2>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tasks.map(task => (
                        <li key={task.id} style={{ background: '#f4f4f4', margin: '10px', padding: '10px', borderRadius: '5px' }}>
                            {task.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;