import express from 'express';
import { servicoController } from '../controllers/servicoController.js';

const router = express.Router();

router.get('/', servicoController.listar);
router.post('/', servicoController.criar);

export default router;