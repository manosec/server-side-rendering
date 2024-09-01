import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App.js';

const app = express()


app.use(express.static('public'))

app.get('/', (req, res)=>{

    const appHTML = ReactDOMServer.renderToString(React.createElement(App, { name: 'Manoranjan' }))

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>SSR with Express</title>
        </head>
        <body>
            <div id="app">${appHTML}</div>
            <script src="/client.js"></script>
        </body>
        </html>
    `);

})


app.listen(3000, ()=>{
    console.log("Server started")
})