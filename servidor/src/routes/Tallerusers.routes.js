import {Router} from 'express'
import { addUsers, deleteUsersById, getMachines, getUsersById, getUsers, updateUserById} from '../controllers/Tallerusers.controller';

const router = Router();

//RUTAS DE CRUD DE TALLER
router.get('/users', getUsers)
router.post('/users', addUsers)
router.get('/users/:id', getUsersById)
router.delete('/users/:id', deleteUsersById)
router.put('/users/:id',updateUserById)

//RUTAS CRUD MAQUINAS
router.get('/machines', getMachines)
router.post('')
router.get('')
router.delete('')
router.put('')

export default router