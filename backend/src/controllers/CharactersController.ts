import { Request, Response } from 'express';

class CharactersController {
    async add(req: Request, res: Response) {
        const dados = req.body;

        res.json({ dados });
    }
}
export { CharactersController };