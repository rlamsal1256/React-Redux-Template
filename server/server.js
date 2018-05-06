const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const DEFAULT_PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.status(200).send('all good bruh');
});

app.use(express.static('dist'));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

module.exports = {
    httpServer: null,
    start: () => new Promise((resolve) => {
        this.httpServer = http.createServer(app);
        this.httpServer.listen(DEFAULT_PORT, () => {
            console.info(`template listening on port ${DEFAULT_PORT}!`);
            resolve(this.httpServer);
        });
    }),
    close: () => this.httpServer.close(),
};
