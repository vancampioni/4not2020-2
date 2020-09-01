const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: {
        type: String,
        required: true //campo obrigatório
    },
    ementa: {
        type: String,
        required: true
    },
    carga_horaria: {
        type: Number,
        required: true,
        min: 4,     //permitido para campos numéricos
        max: 80
    },
    nivel: {
        type: String,
        required: true,
        enum: ['Básico', 'Intermediário', 'Avançado'] //conjunto de valores aceitos no campo
    },
    valor_curso: {
        type: Number,
        required: true,
        default: 450, //valor assumido se não for informado
        min: 50
    }
})

/*
    Parâmetros de método mongoose.model()
    1º -> Nome do modelo (sempre igual ao nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do modelo
          serão armazenados no MongoDB = com letra minuscula e no plural (Cursos => 'cursos')
*/
module.exports = mongoose.model('Curso', esquema, 'cursos')