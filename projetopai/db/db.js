const conectar = async()=>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao;

    const mysql = require('mysql2/promise');
    const con=mysql.createConnection('mysql://maurilio:maurilio123@192.168.100.108:3306/node');
    console.log('conectou ao banco');
    global.conexao=con;
    return con;
}

const todosClientes = async()=>{
    const con = await conectar();
    const [linhas] = await con.query('select * from cliente');
    return await linhas
};

module.exports = {todosClientes};