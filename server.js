const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : '',
        database : 'speedmaster'
    }
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/driver',(req,res)=>{
    db('location').insert({lat: req.body.lat,long: req.body.long})
        .then( function (res) {
            res.json({ success: true, message: 'ok' });
        })
})

app.get('/parent',(req,res)=>{
    return db.select('*').from('location')
        .then(location => {
            res.json(location[0])
        })
})

app.listen(3000,()=>console.log('app is running on port 3000'));