import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { con } from './repository/connection.js';
import clienteController from './controller/clienteController.js'






const server = express();
server.use(cors());
server.use(express.json());
server.use(clienteController)









server.listen(process.env.PORT, 
    () => 	console.log(`API ONLINE na Porta ${process.env.PORT} seja bem-vindo!`));


    server.get('/ping', (req, resp) =>{
        resp.send('pong')
    })
    


    
    