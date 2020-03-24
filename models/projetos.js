const projetosModel = (sequelize, DataTypes) => {
    const Projetos = sequelize.define('Projetos', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING
    })
    return Projetos
}

module.exports = projetosModel