
const next = require('next');

const express = require('express');

const PORT = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});

const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(PORT, err => {
        if(err) throw err;
        console.log(`server started on port ${PORT}`);
    });
}).catch(e => console.log(e));