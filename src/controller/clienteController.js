import { Router } from "express";
import {

    AlterarCliente, 
    ExbirClientes,
    InserirCliente,
    consultar 
    
    } from "../repository/clientRepository.js";

const server = Router();

server.get('/cliente/busca', async(req, resp) => {
    try {
        const nome = req.query.nome;
        const res = await consultar(nome);
        resp.send(res);
      }
      catch (err) {
        resp.status(500).send({ erro: 'Ocorreu um erro!' });
      }


})


server.put('/cliente/:id', async (req, resp) =>{
    
    try {
        const { id } = req.params;
        const cliente = req.body;

        const resposta = await AlterarCliente(id, cliente);
        if(resposta != 1)
            throw new Error('Cliente não pode ser alterado')
        else
            resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um Erro'
        })
        
    }

})


server.post('/cliente', async (req, resp) =>{
    try {

        const cliente = req.body;
        const resposta = await InserirCliente(cliente);

        resp.send(resposta);
        
    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um Erro'
        })
    }

});


server.get('/cliente', async (req, resp) =>{

    try {
        
        const resposta = await ExbirClientes();
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um Erro'
        })
    }
})

export default server