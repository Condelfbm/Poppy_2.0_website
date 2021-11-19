const express = require('express')
const { sequelize, User } = require('./models')
const bodyParser = require("body-parser")
const router = express.Router()

//configurando o express
const app = express()
app.use(express.json())

app.set("view engine", "ejs") //Configurando a engine utilizada
app.use(express.static(__dirname + '/public')) //Configurando a pasta padrão de imagens

//Configurando o body-parser
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

//Definindo a rota
app.get('/', (req, res) => {
    res.render("index")
})

//POST request para armazenar no banco de dados
app.post('/', (req, res) => {
    const {
        nickname,
        characname,
        classe,
        hp,
        forca,
        destreza,
        constituicao,
        inteligencia,
        sabedoria,
        carisma,
        acrobacia,
        arcanismo,
        atletismo,
        atuacao,
        labia,
        furtividade,
        historia,
        intimidacao,
        intuicao,
        investigacao,
        animais,
        medicina,
        natureza,
        percepcao,
        prestigitacao,
        religiao,
        sobrevivencia,
    } = req.body


    const user = User.create({
        nickname,
        characname,
        classe,
        hp,
        forca,
        destreza,
        constituicao,
        inteligencia,
        sabedoria,
        carisma,
        acrobacia,
        arcanismo,
        atletismo,
        atuacao,
        labia,
        furtividade,
        historia,
        intimidacao,
        intuicao,
        investigacao,
        animais,
        medicina,
        natureza,
        percepcao,
        prestigitacao,
        religiao,
        sobrevivencia,
    })

    res.send('<script>window.location.href="http://localhost:5000"</script>')

    return res.json(user) //Cadastra as informações no banco de dados

})

//Configurando a pesquisa por URL
app.get('/ficha', async (req, res) =>{
    try{
        const fichas = await User.findAll()

        return res.json(fichas)
    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Algo deu errado :('})
    }
})

//Configurando a pesquisa por URL
app.get('/ficha/:nickname', async (req, res) =>{
    const nickname = req.params.nickname
    try{
        const ficha = await User.findOne({
            where: { nickname }
        })

        return res.json(ficha)
    }catch(err){
        console.log(err)
        return res.status(500).json({error: 'Algo deu errado :('})
    }
})

//Hosteando o servidor
app.listen({port:5000}, async () => {
    console.log('Server esta hospedado em http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})