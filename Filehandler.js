const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

// Function to initialize the data file
const initializeDataFile = () => {
    if (!fs.existsSync(dataFilePath)) {
        const initialData = {
            movies: [],
            series: [],
            songs: []
        };
        fs.writeFileSync(dataFilePath, JSON.stringify(initialData, null, 2));
    }
};

// Function to read data from the file
const readData = () => {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
};

// Function to write data to the file
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

module.exports = {
   initializeDataFile,
    readData,
    writeData
};