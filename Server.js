const http = require('node:http');

const hostname = '127.0.0.1'
const port = 3000


let movies = [
    { id: 1, title: 'Inception', year: 2010 },
    { id: 2, title: 'Love Actually', year: 2003 },
    { id: 3, title: 'Love Dont Cost A Thing', year: 2003 },
    { id: 4, title: 'Ted', year: 2012 },
    { id: 5, title: 'Mission Impossible: Dead Reckoning', year: 2023 },
]
let series = [
    { id: 1, title: 'Breaking Bad', year: 2008 },
    { id: 2, title: 'fallout', year: 2023 },
    { id: 3, title: 'fresh prince of bel air', year: 1990 },
    { id: 4, title: 'two and a half man', year: 2003 },
    { id: 5, title: 'Power', year: 2014 },
]
let songs = [
    { id: 1, title: 'Shape of You', year: 2017 },
    { id: 2, title: 'Blinding Lights', year: 2019 },
    { id: 3, title: 'Love yourz', year: 2016 },
    { id: 4, title: 'Bad Guy', year: 2019 },
    { id: 5, title: 'No one Knows', year: 2018 },
]

const handleMoviesEndpoint = (req, res) => {
    if(req.method === 'POST'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(movies))
    }else if(req.method === 'DELETE'){
        movies.splice(0, 1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'deleted',movies:movies}))
    }else if(req.method === 'PUT'){
        movies[0].title = 'The Dark Knight'
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'updated',movies:movies}))
    }else if(req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({movies:movies}))
    }

}
const handleSeriesEndpoint = (req, res) => {
    if(req.method === 'POST'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(series))
    }else if(req.method === 'DELETE'){
        series.splice(0, 1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'deleted',series:series}))
    }else if(req.method === 'PUT'){
        series[0].title = 'Avengers: Endgame'
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'updated',series:series}))
    }else if(req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({series:series}))
    }

}
const handleSongsEndpoint = (req, res) => {
    if(req.method === 'POST'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(songs))
    }else if(req.method === 'DELETE'){
        songs.splice(0, 1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'deleted',songs:songs}))
    }else if(req.method === 'PUT'){
        songs[0].title = 'Proud family'
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'updated',songs:songs}))
    }else if(req.method === 'GET'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({songs:songs}))
    }
} 
const server = http.createServer((req, res) => {
 
    if (req.url === '/movies') {
    handleMoviesEndpoint(req, res)
    }else if(req.url === '/series'){
        handleSeriesEndpoint(req, res)
       
        }else if(req.url === '/songs'){
            handleSongsEndpoint(req, res)
            }else{
                res.statusCode = 404
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'not found'}))
            }
            })
        

server.listen(port, hostname, () => {
    console.log('server running');
})

