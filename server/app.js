const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Loads environment variables.
require('dotenv').config();

// Defines port for Express server.
const PORT = process.env.PORT || 8080;

// Configures CORS options, allowing all origins for test purposes.
const corsOptions = {
    origin: '*'
};

// Initializes and configures Express.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Loads routes.
require('./app/routes/links.routes.js')(app);
require('./app/routes/users.routes')(app);

// Creates default route.
app.get('/', (req, res) => {
    res.json({ message: 'Server is running.' });
});

// Starts server.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
