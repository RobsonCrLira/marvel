import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { ComicsConsulta } from '../marvel/comics-consulta/comics';
import { Comics } from '../models/comics';

class ComicsController {
	async addComics(req: Request, res: Response) {
		const { id, name, description, thumbnail } = req.body;

		const comicsRepository = getRepository(Comics);

		const comicsExists = await comicsRepository.findOne({ where: { id } });

		if (comicsExists) {
			res.status(409).json({ message: `comics existente ${comicsExists.id_uuid}` });
		}

		const comics = comicsRepository.create({ id, name, description, thumbnail });

		await comicsRepository.save(comics);
		res.json({ comics });
	}


	async listComics(req: Request, res: Response) {

		const comicsList = new ComicsConsulta;

		const dados = await comicsList.execute();

		return res.json(dados);
	}
}
export { ComicsController };