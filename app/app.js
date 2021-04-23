const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next(); //se o next, não chamamos o próximo Middleware e ao chamar no browser fica carregando infinitamente
});

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.use('/api/posts', (req, res, next) => {
    let posts = [
        {
            title: "Estudo Node",
            content: "Content Node"
        },
        {
            title: "Estudo Flutter",
            content: "Content Flutter"
        }
    ];
    return res.json({
        message: 'Posts fetched succesfully',
        posts: posts
    });
});

module.exports = app; //exporta todos os middlewares