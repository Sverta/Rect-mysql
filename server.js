import DB from './server/db';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', async (req, res) => {
    var postData = req.body;
    try {
        let users = await DB.Users.all(postData);
        res.end(JSON.stringify(users))
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));