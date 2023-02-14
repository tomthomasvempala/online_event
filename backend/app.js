const express = require('express');
const bodyParser = require('body-parser');

//temporary database
let applicants = [];

// App setup
const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Routes
app.get('/applicants', (req, res) => {
    res.send(applicants);
});


app.post('/register', (req, res) => {
    const item = req.body;
    let t = false;
    applicants.forEach((a) => {
        if (a.email == item.email) {
            t = true;
        }
    })
    if (t) {
        res.status(409).json({ message: 'already used email' })
    } else {
        applicants.push(item);
        res.status(200).json({ message: 'Item added to the list' });
    }
});




// Server setup
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




