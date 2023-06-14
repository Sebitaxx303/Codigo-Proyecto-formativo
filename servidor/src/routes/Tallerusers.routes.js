import {Router} from 'express'
import { createNewTaller, deleteTallerById, getTallerById, getTalleres } from '../controllers/Tallerusers.controller';

const router = Router();

router.get('/talleres', getTalleres)
router.post('/talleres', createNewTaller)
router.get('/talleres/:id_taller', getTallerById)
router.delete('/talleres/:id_taller', deleteTallerById)
router.put('/talleres', )

export default router