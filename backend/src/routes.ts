import { Router } from 'express';

import { UserController } from './controllers/UserController';
import { AuthController } from './controllers/AuthController';
import { CharactersController } from './controllers/CharactersController';
import { ComicsController } from './controllers/ComicsController';
import authMiddlewares from './middlewares/authmiddlewares';

const user = new UserController();
const auth = new AuthController();
const characters = new CharactersController();
const comics = new ComicsController();
const router = Router();


router.get('/charactersList', characters.listCharacters);
router.get('/charactersID/:id', characters.CharactersID);
router.post('/charactersAdd', characters.addcharacters);

router.get('/comicsList', comics.listComics);
router.get('/comics/:id', comics.listComics);
router.post('/comicsAdd', comics.addComics);

router.post('/users', user.create);
router.get('/users/:id', user.userID);

router.post('/auth', authMiddlewares, auth.execute);

export default router;