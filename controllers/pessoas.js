const index = async ({ Pessoas }, req, res) => {
    const pessoasAll = await Pessoas.findAll()
    res.render('pessoas/index', { pessoas: pessoasAll })
}

const createForm = (req, res) => {
    res.render('pessoas/create')
}

const createProcess = async ({ Pessoas }, req, res) => {
    await Pessoas.create(req.body)
    res.redirect('/pessoas')
}

const deleteOne = async ({ Pessoas }, req, res) => {
    await Pessoas.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/pessoas')
}

const updateForm = async ({ Pessoas }, req, res) => {
    const pessoa = await Pessoas.findOne({
        where: {
            id: req.params.id
        }
    })
    res.render('pessoas/update', { pessoa })
}

const updateProcess = async({Pessoas}, req, res) => {
    await Pessoas.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/pessoas')
}

module.exports = {
    index,
    createForm,
    createProcess,
    deleteOne,
    updateForm,
    updateProcess
}