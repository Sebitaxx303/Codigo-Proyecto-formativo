
export const queries = {
    //QUERIES DE CRUD DE TALLERES
    getUsers: 'SELECT * FROM users',
    addUsers: 'INSERT INTO users (company_name, rut, u_address, email, Phone_number, user_type) VALUES (@company_name, @rut, @u_address, @email, @Phone_number, @user_type )',
    getUsersById: 'SELECT * FROM users WHERE id = @id',
    deleteUsersById: 'DELETE FROM users WHERE id = @id',
    updateUserById: 'UPDATE users SET company_name = @company_name, rut = @rut, u_address = @u_address , email = @email, Phone_number = @Phone_number, user_type = @user_type  WHERE id = @id ',

    //QUERIES DE CRUD DE MAQUINAS
    getMachines: 'SELECT * FROM machines'
}