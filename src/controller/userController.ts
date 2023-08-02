import { Request, Response } from "express";

import db from '../config/database';

async function getUser(req: Request, res: Response){
    db.connection.query('SELECT * FROM clients_ecommerce',(err, results)=>{
        if(err) {
            res.json({ sucess: false})
        }else{
            res.json({sucess: true, message: 'Listagem de usuários realizada com sucesso', result: results});
        }
    });
}

async function postUser(req: Request, res: Response) {
    const querysql = 'INSERT INTO clients_ecommerce(ds_name,nm_cpf,fl_status)VALUES (?,?,?)';
    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status
    );

db.connection.query(querysql,params, (err, results)=>{
    if (err){
        res.json({sucess: false})
    }else{
    
        res.json({sucess: true, message: 'Cadastro de usuário realizado com sucesso', result: results});

    }
    });
}

async function putUser(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = 'UPDATE clients_ecommerce SET ds_name=?,nm_cpf=?,fl_status=? WHERE id_client=?;';
    const params = Array(
        req.body.ds_name,
        req.body.nm_cpf,
        req.body.fl_status,
        idUser
    );

db.connection.query(querysql,params, (err, results)=>{
    if (err){
        res.json({sucess: false})
    }else{
    
        res.json({sucess: true, message: 'Cadastro de usuário realizado com sucesso', result: results});

    }
    });
}

async function deleteUser(req: Request, res: Response){
    const queryString = 'DELETE FROM clients_ecommerce WHERE ID_CLIENT = ?';

    db.connection.query(queryString,req.params.id,(err, results)=>{
        if(err) {
            res.json({ sucess: false})
        }else{
            res.json({sucess: true, message: 'Usuário deletado com sucesso', result: results});
        }
    });
}



export default {
    getUser,
    postUser,
    putUser,
    deleteUser
}