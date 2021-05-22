import { Router } from 'express';
import { ComicsConsulta } from './comics-consulta/comics';
import { CharactersConsulta } from './characters-consulta/characters';

const comicsget = new ComicsConsulta();
const charactersget = new CharactersConsulta();
const router = Router();

router.get('/comics', comicsget.execute);
router.get('/characters', charactersget.execute);

export default router;