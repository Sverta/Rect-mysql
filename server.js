// import { Connection } from './server/db/index';

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'Passw0rd',
  database : 'usersdb'
});

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/users', (req, res) => {
//     connection.query('SELECT * from users', function (err, data) {
//         if (!err) {
//             res.send(JSON.stringify(data));
//             // console.log(res);
//         } else {
//             console.log('Error while performing Query.', err);
//         }
//     });
// });


app.post('/users', (req, res) => {
    var postData = req.body;
    console.log(req.body);
    connection.query('INSERT INTO users SET ?', postData, (error, results) => {
        if (error) throw error;
        res.end(JSON.stringify(results))
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));