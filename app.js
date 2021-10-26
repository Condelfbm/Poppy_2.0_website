const express = require('express')
const { sequelize, User } = require('./models')
const bodyParser = require("body-parser");

const app = express()
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render("index")
})

app.post('/users', async(req, res) => {
    const {name, email, description} = req.body

    try{
        const user = await User.create({name, email, description})

        return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.listen({port:5000}, async () => {
    console.log('Server esta hospedado em http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})

