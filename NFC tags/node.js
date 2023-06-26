const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/progressReport', (req, res) => {
    const studentId = req.body.studentId;

    
    const progressReport = {
    };

    res.json(progressReport);
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
