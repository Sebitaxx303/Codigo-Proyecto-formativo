import sql, { query } from 'mssql'

const dbconfig = {
    user: 'sebas',
    password: '1234',
    server:  'localhost',
    database: 'solctext',
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
