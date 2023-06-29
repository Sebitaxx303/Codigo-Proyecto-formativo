import {Router} from 'express'
import { addUsers, deleteUsersById, getMachines, getUsersById, getUsers, updateUserById, addMachines} from '../controllers/Tallerusers.controller';

const router = Router();

//RUTAS DE CRUD DE TALLER
router.get('/users', getUsers)
router.post('/users', addUsers)
router.get('/users/:id', getUsersById)
router.delete('/users/:id', deleteUsersById)
router.put('/users/:id',updateUserById)

//RUTAS CRUD MAQUINAS
router.get('/machines', getMachines)
router.post('/machines', addMachines)
router.get('/machines/:id_user')
router.delete('/machines/:id_user')
router.put('/machines/:id_user')

export default router