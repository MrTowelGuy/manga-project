//controllers
const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');

//INDEX
router.get('/', (req,res) => {
    Posts.find({}, (err, foundPosts) =>{
        res.render('/home(index).ejs', {
            posts: foundPosts
        });
    });
});

//NEW
router.get('/new', (req,res) => {
    res.render('/new.ejs');
})

//DELETE
router.delete('/:id', (req,res) => {
    Posts.findByIdAndRemove(req.params.id, () => {
        res.redirect('/')
    });
});

//UPDATE
router.put('/:id', (req,res) =>{
    Posts.findByIdAndUpdate(req.params.id, req.body, () =>{
        res.redirect('/');
    });
});

//CREATE
router.post('/', (req, res) => {
    Posts.create(req.body, (err, createdPosts) => {
        res.redirect('/');
    });
});

//EDIT
router.get('/:id/edit', (req,res) =>{
    Posts.findById(req.params.id, (err, foundPosts) =>{
        res.render('/edit.ejs', {
            posts: foundPosts
        });
    });
});

//SHOW
router.get('/:id', (req, res) => {
    posts.findById(req.params.id, (err, foundPosts) => {
        res.render('/show(postpage).ejs', {
            posts: foundPosts
        });
    });
});

//signal out
module.exports = router;