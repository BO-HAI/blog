var express = require('express');

module.exports = function (app) {

    app.get('/', (req, res) => {
      res.render('index', {title: '首页'});
    });

    app.get('/reg', function (req, res) {
        res.render('reg', {title: '注册'});
    });

    app.post('/reg', function (req, res) {

    });

    app.get('/login', function (req, res) {
        res.render('login', {title: '登录'});
    });

    app.post('/login', function (req, res) {

    });

    app.get('/post', function (req, res) {
        res.render('post', {title: '发表'});
    });

    app.post('/post', (req, res) => {

    });

    app.get('/logout', function (req, res) {

    })

};

