import { Router } from 'express';
import { equipamentoController } from '../controllers/equipamentoController.js';

const router = Router();

router.get('/', equipamentoController.listar);
router.post('/', equipamentoController.criar);

export default router;