const express = require('express');
const app = express();
const port = process.env.port || 3000;
const socksRoutes = require('./routes/socks');


// Middleware(s)
app.use(express.json());


// First route
app.get('/', (req, res) => {
    res.send('Welcome to the sal');
});

app.use('/api/socks', socksRoutes);

app.listen(port, () => console.log(`Listening to the sal on port ${port}`));
