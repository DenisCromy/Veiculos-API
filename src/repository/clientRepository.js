import { con } from "./connection.js";

export async function InserirCliente(cliente){
    const comando = `
    insert into tb_cliente (nm_cliente, ds_cpf, ds_telefone, ds_email, ds_cnh)
            values (?, ?, ?, ?, ?);
    
    `

    const [ resp ] = await con.query(comando,
    [

        cliente.nome,
        cliente.cpf,
        cliente.telefone,
        cliente.email,
        cliente.cnh

    ]);

    cliente.id = resp.insertId;
    return resp

};

export async function ExbirClientes(){
    const comando = `
        
        select 
            id_cliente      as Id,
            nm_cliente      as Nome,
            ds_cpf          as CPF,
            ds_telefone     as Telefone,
            ds_email        as Email,
            ds_cnh          as CNH

        
        from tb_cliente
    `

    const [resp] = await con.query(comando);
    return resp;


};

export async function AlterarCliente(id, cliente){
    const comando = `
    UPDATE tb_cliente
    set     nm_cliente = ?,
            ds_cpf = ?,
            ds_telefone = ?,
            ds_email = ?,
            ds_cnh = ?
    WHERE id_cliente = ? 
    `

    const [ resp ] = await con.query(comando, [
        cliente.nome,
        cliente.cpf,
        cliente.telefone,
        cliente.email,
        cliente.cnh,
        id

    ])

    return resp.affectedRows;

}