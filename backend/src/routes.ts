import { Router } from 'express';
// import { ComicsConsulta } from './marvel/comics-consulta/comics';
// import { CharactersConsulta } from './marvel/characters-consulta/characters';
import { UserController } from './controllers/userController';
import { AuthController } from './controllers/AuthController';
import authMiddlewares from './middlewares/authmiddlewares';

// const comicsget = new ComicsConsulta();
// const charactersget = new CharactersConsulta();
const user = new UserController();
const auth = new AuthController();
const router = Router();


// router.get('/comics', comicsget.execute);
// router.get('/characters', charactersget.execute);
router.post('/users', user.create);
router.post('/auth', auth.execute);
router.post('/login', authMiddlewares, user.index);

export default router;