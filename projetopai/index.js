(async ()=>{
    const db = require('./db/db');
    console.log('obter todos os clientes');
    const clientes = await db.todosClientes()
    console.log(clientes)
})()