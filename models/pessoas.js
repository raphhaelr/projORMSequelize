const pessoasModel = (sequelize, DataTypes) => {
    const Pessoas = sequelize.define('Pessoas', {
        nome: DataTypes.STRING,
        dataNascimento: DataTypes.DATE,
        cargo: DataTypes.STRING
    })

    Pessoas.associate = ({ Projetos }) => {
        Pessoas.hasOne(Projetos)
    }

    return Pessoas
}


module.exports = pessoasModel