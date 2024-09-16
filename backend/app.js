const express = require('express');
const { connect, connection } = require('mongoose');
const cors = require('cors');
const route = require('./routes/routes');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

app.use(cors({
    credentials : true,
    origin : "http://localhost:5173"
}));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());

connect(process.env.DATABASE_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
});

const db = connection;
db.on('error', () => console.log('server failed to connect to database'));
db.once('open', () => {
    app.listen(8081, () => console.log('server connected to database and runnning on port 8080'));
    app.use(route)
});
