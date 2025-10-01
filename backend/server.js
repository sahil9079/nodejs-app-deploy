const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// A simple API endpoint
app.get('/api/tasks', (req, res) => {
    const tasks = [
        { id: 1, title: 'Containerize the frontend' },
        { id: 2, title: 'Set up the CI/CD pipeline' },
        { id: 3, title: 'Deploy to Kubernetes' }
    ];
    console.log('GET /api/tasks - Responding with task list');
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});