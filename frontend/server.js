const express = require('express');
const app = express();
const PORT = 3333;

app.use(express.static(__dirname));

app.use('/api', (req, res) => {
    fetch('http://backend-service:5555/api/data')
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));

