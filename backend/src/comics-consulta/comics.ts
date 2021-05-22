import { Request, Response } from 'express';
import { marvelApi } from '../api-marvel';

class ComicsConsulta {
    async execute(req: Request, res: Response) {
        const resultados = await marvelApi.get('/comics');

        return res.json(resultados);
    }
}

export { ComicsConsulta };