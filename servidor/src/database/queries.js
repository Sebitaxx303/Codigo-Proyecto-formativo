
export const queries = {
    getTalleres: 'SELECT * FROM tbl_talleres',
    addTalleres: 'INSERT INTO tbl_talleres (nombre_taller,rut,direccion,correo,telefono) VALUES (@nombre_taller, @rut, @direccion, @correo, @telefono )',
    getTalleresById: 'SELECT * FROM tbl_talleres WHERE id_taller = @id_taller',
    deleteTalleresById: 'DELETE FROM tbl_talleres WHERE id_taller = @id_taller',
}