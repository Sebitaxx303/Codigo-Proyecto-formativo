import {getConnection,sql,queries} from '../database'

// GET de talleres 
export const getTalleres = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getTalleres);
        res.json(result.recordset) 
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }

};

//POST de talleres
export const createNewTaller = async (req, res) => {

    const { nombre_taller, rut, direccion, correo, telefono } = req.body
    if (nombre_taller == null || rut == null || direccion == null ) {
        return res.status(400).json({msg: "petición erronea, por favor llena todos los campos"})
    }
    try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("nombre_taller", sql.VarChar, nombre_taller)
    .input("rut", sql.VarChar, rut)
    .input("direccion", sql.VarChar, direccion)
    .input("correo", sql.VarChar, correo)
    .input("telefono", sql.VarChar, telefono)
    .query(queries.addTalleres);

    res.json({nombre_taller, rut, direccion, correo, telefono})
    } catch (error) {
        res.status(500);
    }

    const pool = await getConnection();

    const result = await pool.request()
    .input("nombre_taller", sql.VarChar, nombre_taller)
    .input("rut",  sql.VarChar,rut)
    .input("direccion",  sql.VarChar,direccion)
    .input("correo",  sql.VarChar, correo)
    .input("telefono", sql.VarChar,telefono)
    .query(queries.addTalleres);
    res.json(result.recordset)
};

// GET BY ID de talleres
export const getTallerById = async  (req,res) => {
    const {id_taller} = req.params
    const pool = await getConnection()
    const result = await pool.request()
    .input('id_taller', id_taller)
    .query(queries.getTalleresById)
    res.send(result.recordset)

}
//DELETE BY ID de talleres
export const deleteTallerById = async  (req,res) => {
    try {
        const {id_taller} = req.params
        const pool = await getConnection()
        const result = await pool.request()
        .input('id_taller', id_taller)
        .query(queries.deleteTalleresById)
        res.send(result)
    } catch (error) {
        res.sendStatus(204)
    }
}

//
export const updateTallerByid = async (req,res) => {
    
}