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
    const {
        nickname,
        characname,
        classe,
        hp,
        description,
        iniciativa,
        defesa,
        agilidade,
        blefe,
        conhecimento,
        cura,
        forca,
        furtividade,
        inteligencia,
        labia,
        manejo,
        preparacao,
        performace,
        pontaria,
        resistencia,
        sobrevivencia,
        animais,
        vontade,
    } = req.body

    try{
        const user = await User.create({
            nickname,
            characname,
            classe,
            hp,
            description,
            iniciativa,
            defesa,
            agilidade,
            blefe,
            conhecimento,
            cura,
            forca,
            furtividade,
            inteligencia,
            labia,
            manejo,
            preparacao,
            performace,
            pontaria,
            resistencia,
            sobrevivencia,
            animais,
            vontade,
        })

        return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get('/ficha', async (req, res) =>{
    try{
        const fichas = await User.findAll()

        return res.json(fichas)
    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Algo deu errado :('})
    }
})

app.listen({port:5000}, async () => {
    console.log('Server esta hospedado em http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})