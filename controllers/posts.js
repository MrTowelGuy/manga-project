//controllers
const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');

//INDEX 
// index route is in my server.js

//NEW
router.get('/new', (req,res) => {
    res.render('new.ejs');
})

//DELETE
router.delete('/home/:id', (req,res) => {
    Posts.findByIdAndRemove(req.params.id, () => {
        res.redirect('/home');
    });
});

//UPDATE
router.put('/:id', (req,res) =>{
    Posts.findByIdAndUpdate(req.params.id, req.body, () =>{
        res.redirect('/home');
    });
});

//CREATE
router.post('/home', (req, res) => {
    Posts.create(req.body, (err, createdPosts) => {
        res.redirect('/home');
    });
});

//EDIT
router.get('/:id/edit', (req,res) =>{
    Posts.findById(req.params.id, (err, foundPosts) =>{
        res.render('edit.ejs', {
            posts: foundPosts
        });
    });
});

//SHOW
router.get('/:id', (req, res) => {
    Posts.findById(req.params.id, (err, foundPosts) => {
        res.render('show(postpage).ejs', {
            posts: foundPosts
        });
    });
});

//signal out
module.exports = router;