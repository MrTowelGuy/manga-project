const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose')
const postsController = require('./controllers/posts');
const Posts = require('./models/posts')
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');

//database config
mongoose.connect(process.env.DATABASE_URL)

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))



//root route
app.get('/home', (req,res) => {
    Posts.find({}, (err, foundPosts) =>{
        // console.log(foundPosts)
        res.render('home(index).ejs', {
            posts: foundPosts
        });
    });
});

//database connection error/success
const db = mongoose.connection;
db.on('error',(err) => console.log(err.message + ' mongo is not running!!'));
db.on('connected', ()=> console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.use('/', postsController);

//our listener!
app.listen(PORT, () => 
    console.log("It's me, ya boy on port:", PORT));

//PROJECT DONE