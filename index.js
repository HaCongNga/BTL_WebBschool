const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // link cai public vao
app.use(express.static(path.join(__dirname, 'views'))); // link cai public vao



const handlebars = require('express-handlebars');
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const db = require('./config/db');
db.connect();

app.get('/', (req, res) => {
    res.render('home');
});

const User = require('./models/User');
app.post('/', (req, res) => {
    const formData = req.body;
    console.log(formData);
    const user = new User(formData); // o day la tao 1 user moi vs cai formdata nhao vao
    user.save(); // cho nay la luu vao db
});

// vi du login

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const formData = req.body;
    console.log(formData);
    User.find(formData)
        .then(result => {
            if (result.length > 0) {
                /// dang nhap thanh cong thì viet o day
                //vidu
                //res.('Dang nhap thanh cong');
                res.redirect('/lienhe'); // nhay vao trang chu
            }
            else {
                
                console.log('Khong thay email hoac nhap sai pass');
            }
        })
});

app.get('/lienhe', (req, res) => {
    res.render('lienhe');
});

app.get('/tailieu', (req, res) => {
    res.render('tailieu');
});

app.get('/tailieuvip', (req, res) => {
    res.render('tailieuvip');
});

app.get('/thanhtich', (req, res) => {
    res.render('thanhtich');
});

app.get('/trangchu', (req, res) => {
    res.render('trangchu');
});


const port = 3002;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});