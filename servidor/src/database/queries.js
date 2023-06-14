
export const queries = {
    //QUERIES DE CRUD DE TALLERES
    getTalleres: 'SELECT * FROM tbl_talleres',
    addTalleres: 'INSERT INTO tbl_talleres (nombre_taller,rut,direccion,correo,telefono) VALUES (@nombre_taller, @rut, @direccion, @correo, @telefono )',
    getTalleresById: 'SELECT * FROM tbl_talleres WHERE id_taller = @id_taller',
    deleteTalleresById: 'DELETE FROM tbl_talleres WHERE id_taller = @id_taller',
    updateTallerById: 'UPDATE tbl_talleres SET nombre_taller = @nombre_taller, rut = @rut, direccion = @direccion , correo = @correo, telefono = @telefono  WHERE id_taller = @id_taller ',

    //QUERIES DE CRUD DE MAQUINAS
    getTiposMaquinas: 'SELECT * FROM tbl_tipo_maquinas'
}