const express = require('express')
const pessoasController = require('../controllers/pessoas')
const router = express.Router()
const model = require('../models/index')

router.get('/', pessoasController.index.bind(null, model.models))
router.get('/create', pessoasController.createForm)
router.post('/create', pessoasController.createProcess.bind(null, model.models))
router.get('/delete/:id', pessoasController.deleteOne.bind(null, model.models))
router.get('/update/:id', pessoasController.updateForm.bind(null, model.models))
router.post('/update/:id', pessoasController.updateProcess.bind(null, model.models))

module.exports = router