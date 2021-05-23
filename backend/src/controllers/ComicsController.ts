import { Request, Response } from 'express';

class ComicsController {
    async add(req: Request, res: Response) {
        const dados = req.body;

        res.json({ dados });
    }
}
export { ComicsController };