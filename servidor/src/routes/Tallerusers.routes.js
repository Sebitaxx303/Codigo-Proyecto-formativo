import {Router} from 'express'
import { createNewTaller, getTalleres } from '../controllers/Tallerusers.controller';

const router = Router();

router.get('/talleres', getTalleres)
router.post('/talleres', createNewTaller)
router.delete('/talleres', )
router.put('/talleres', )

export default router