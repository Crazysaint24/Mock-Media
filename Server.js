const http = require('node:http');
const fs = require('fs');
const path = require('path');
const { initializeDataFile, readData, writeData } = require('./Filehandler');

const hostname = '127.0.0.1';
const port = 3000;

// Initialize data file on server start
initializeDataFile();

const handleMoviesEndpoint = (req, res) => {
    const data = readData();
    if (req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ movies: data.movies }));
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const newMovie = JSON.parse(body);
            data.movies.push(newMovie);
            writeData(data);
            res.statusCode = 201;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Movie added', movies: data.movies }));
        });
    } else {
        res.statusCode = 405;
        res.end(JSON.stringify({ message: 'Method not allowed' }));
    }
};

const serveApiDoc = (res) => {
    const docPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(docPath)) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(docPath).pipe(res);
    } else {
        res.statusCode = 404;
        res.end('<h1>API Documentation Not Found</h1>');
    }
};

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        serveApiDoc(res);
    } else if (req.url === '/movies') {
        handleMoviesEndpoint(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Not found' }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});