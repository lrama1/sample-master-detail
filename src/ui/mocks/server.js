const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jsonQuery = require('json-query')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const vehicles = require('./Vehicles.json')

app.get('/sample-master-detail/vehicles', (req, res) =>{
    return res.json(vehicles)
})

app.get('/sample-master-detail/vehicle/:id', (req, res) =>{
    const returnVal = jsonQuery('rows[id=' + req.params.id + ']',{data: vehicles})
    return res.json(returnVal.value)
})

app.put('/sample-master-detail/vehicle/:id', (req, res) =>{
    console.log(req.body)
    return res.json(req.body)
})

app.listen(8000)
console.log('Listening on port 8000')