const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : '',
        password : '',
        database : 'speedmaster'
    }
});

let datab = {
    lat:'',
    long:''
}

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/driver',(req,res)=>{
    console.log(req.body);
    datab.lat = parseFloat(req.body.lat);
    datab.long = parseFloat(req.body.long);
})

app.get('/parent',(req,res)=>{
    if(datab.lat!=0 && datab.long!=0)
        res.send({lat: datab.lat,long: datab.long})

})

app.listen(3000,()=>console.log('app is running on port 3000'));