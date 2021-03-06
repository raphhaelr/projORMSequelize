const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const model = require('./models/index')
const pessoas = require('./routes/pessoas')
const bodyParser = require('body-parser')

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/pessoas', pessoas)

app.get('/', (req, res) => {
    res.render('index')
})


model.sequelize.sync({ force: true }).then(() => {
    app.listen(port, () => {
        console.log('Server CRUD ORM running...')
    })
})


