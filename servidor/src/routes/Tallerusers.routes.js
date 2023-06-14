import {Router} from 'express'
import { createNewTaller, deleteTallerById, getTiposMaquinas, getTallerById, getTalleres, updateTallerById} from '../controllers/Tallerusers.controller';

const router = Router();

//RUTAS DE CRUD DE TALLER
router.get('/talleres', getTalleres)
router.post('/talleres', createNewTaller)
router.get('/talleres/:id_taller', getTallerById)
router.delete('/talleres/:id_taller', deleteTallerById)
router.put('/talleres/:id_taller',updateTallerById)

//RUTAS CRUD MAQUINAS
router.get('/maquinas', getTiposMaquinas)
router.post('')
router.get('')
router.delete('')
router.put('')

export default router