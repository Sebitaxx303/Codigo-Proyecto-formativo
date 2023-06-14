
export const queries = {
    getTalleres: 'SELECT * FROM tbl_talleres',
    addTalleres: 'INSERT INTO tbl_talleres (nombre_taller,rut,direccion,correo,telefono) VALUES (@nombre_taller, @rut, @direccion, @correo, @telefono )'
}