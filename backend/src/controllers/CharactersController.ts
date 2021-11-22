import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { marvelApi } from '../marvel/api-marvel';
import { CharactersConsulta } from '../marvel/characters-consulta/characters';
import { CharactersRepository } from '../repositories/CharactersRepository';

class CharactersController {
	async addcharacters(req: Request, res: Response) {
		const { id, name, description, thumbnail } = req.body;

		const charactersRepository = getCustomRepository(CharactersRepository);

		const charctersExists = await charactersRepository.findOne({ id: parseInt(id) });

		if (charctersExists) {
			res.status(409).json({ message: `Chacters existente ${charctersExists.id_uuid}` });
		}

		const characters = charactersRepository.create({ id, name, description, thumbnail });

		await charactersRepository.save(characters);

		res.json({ charcters: characters });
	}


	async listCharacters(req: Request, res: Response) {

		const charactersConsulta = new CharactersConsulta;

		const dados = await charactersConsulta.execute();

		return res.json(dados);
	}
	async CharactersID(req: Request, res: Response) {
		const { id } = req.params;

		const charactersRepository = getCustomRepository(CharactersRepository);
		const charactersConsulta = new CharactersConsulta;

		const characters = await charactersRepository.findOne({ id: parseInt(id) });

		if (!characters) {
			const charactersmarvel = await charactersConsulta.executeID(id);
			if (charactersmarvel) {
				res.status(404).json(charactersmarvel);
			}
		}
		return res.json(characters);
	}
}
export { CharactersController };
