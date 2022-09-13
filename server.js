const express = require('express');
require('dotenv').config();
const methodOverride = require('method-override');
const app = express();
const mongoose = require('mongoose')
const postsController = require('./controllers/posts');
const port = 3000;

//database config
mongoose.connect(process.env.DATABASE_URL)

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));
app.use('/posts', postsController)

//root route
app.get('/', (req,res) => {
    res.render('home(index).ejs')
});

//database connection error/success
const db = mongoose.connection;
db.on('error',(err) => console.log(err.message + ' mongo is not running!!'));
db.on('connected', ()=> console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

//our listener!
app.listen(port, () => {
    console.log(`it's me, ya boy on port ${port}`)
});