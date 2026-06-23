import express from 'express';
import { cidadeController } from '../controllers/cidadeController.js';

const router = express.Router();

router.get('/', cidadeController.listar);
router.post('/', cidadeController.criar);

export default router;