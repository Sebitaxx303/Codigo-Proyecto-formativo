import {getConnection,sql,queries} from '../database'


export const getTalleres = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM tbl_talleres');
    console.log(result)
    res.json(result.recordset)
};


export const createNewTaller = async (req, res) => {
    const { nombre_taller, rut, direccion, correo, telefono } = req.body
    if (nombre_taller == null || rut == null || direccion == null ) {
        return res.status(400).json({msg: "petición erronea, por favor llena todos los campos"})
    }
    const pool = await getConnection();
    await pool.request()
    .input("nombre_taller", sql.VarChar, nombre_taller)
    .input("rut",  sql.VarChar,rut)
    .input("direccion",  sql.VarChar,direccion)
    .input("correo",  sql.VarChar, correo)
    .input("telefono", sql.VarChar,telefono)
    .query('INSERT INTO tbl_talleres (nombre_taller, rut, direccion, correo, telefono) VALUES (@nombre_taller, @rut, @direccion, @correo, @telefono )');
    res.json('new taller')
};

export const getTallerById = async  (req,res) => {
    
}