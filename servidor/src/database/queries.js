
export const queries = {
    //QUERIES DE CRUD DE TALLERES
    getUsers: 'SELECT * FROM users',
    addUsers: 'INSERT INTO users (company_name, rut, u_address, email, phone_number, user_type) VALUES (@company_name, @rut, @u_address, @email, @phone_number, @user_type )',
    getUsersById: 'SELECT * FROM users WHERE id = @id',
    deleteUsersById: 'DELETE FROM users WHERE id = @id',
    updateUserById: 'UPDATE users SET company_name = @company_name, rut = @rut, u_address = @u_address , email = @email, phone_number = @phone_number, user_type = @user_type  WHERE id = @id ',

    //QUERIES DE CRUD DE MAQUINAS
    getMachines: 'SELECT machines.id_user, machine_types.machine_type, users.company_name FROM ((machines INNER JOIN machine_types ON machines.id_type = machine_types.id_type) INNER JOIN users ON machines.id_user = users.id)',
    addMachines: 'INSERT INTO machines (id_user,id_type) values (@id_user, @id_type)'
}