import sql, { query } from 'mssql'

const dbconfig = {
    user: 'sebas',
    password: '1234',
    server:  'localhost',
    database: 'proyecto_f',
    options: {    
        encrypt: true,
        trustServerCertificate: true,
    },
};
export async function getConnection(){
    try {
        const pool = await sql.connect(dbconfig)
        return pool;
    } catch (error) {
        console.error(error)
    }
};
export { sql }
