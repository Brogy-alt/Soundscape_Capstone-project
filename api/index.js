const express = require('express');
// route
const route = require('./controller');
// cors
const cors = require('cors');
// port
const port = parseInt(process.env.PORT) || 7000;
// express app
const app = express();
// middleware
const {errorHandling} = require('./middleware/ErrorHandling');

const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next();
});
app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended:false})
)

// sever is running
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
});

// handling errors
app.use(errorHandling);