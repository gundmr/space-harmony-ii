const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const sendGrid = require('@sendGrid/mail');
//const config = require('config');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

// sendGrid - need this to connect too
// const sGkey = config.get('sendGridKey');

// app.post('/api/email',(req, res, next) => {
//     sendGrid.setApiKey(sGkey);
//     const msg ={
//         to: 'rachelm.gundy@gmail.com',
//         from: req.body.email,
//         subject: 'Website Contact',
//         text: req.body.message
//     }

//     sendGrid.send(msg)
//         .then(result => {
//             res.status(200).json({
//                 success: true
//             });
//         })
//         .catch(err => {
//             console.log('error: ', err);
//             res.status(401).json({
//                 success:false
//             })
//         });
// });

//Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    //app.use(express.static('client/build')); //traversy
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
        //res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); //traversy
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}



app.listen(port, () => console.log(`Server started on port ${port}`));