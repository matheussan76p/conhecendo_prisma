const prisma = require ("../data/prisma.js")

const listar = async (req,res) =>{

    const lista = await prisma.usuario.findMany(); 

    res.status(200).json(Lista).end(); 

}
const cadastrar = async (req,res)=>{
    const {nome, email, idade, senha} = req.body


    const item = await prisma.usuario.create({
        data:{
        nome,
        idade,
        senha,
        email
        }
    })
}
const criar = async (req,res)=>{
    const data = req.body; 

    const item = await prisma.usuario.create({
        data 
    })
    res.json(item).status(201).end(); 
}
module.exports = {
        listar
};