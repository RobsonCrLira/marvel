import { Router } from 'express';
import { ComicsConsulta } from './comics-consulta/comics';

const comicsget = new ComicsConsulta();
const router = Router();

router.get('/', comicsget.execute);

export default router;