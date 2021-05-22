import { Request, Response } from 'express';
import { marvelApi } from '../api-marvel';

class ComicsConsulta {
	async execute(req: Request, res: Response) {
		const { data } = await marvelApi.get('/comics');
		const dados = data.data.results.map((dado: any) => {
			return {
				id: dado.id,
				name: dado.name,
				description: dado.description,
				thumbnail: dado.thumbnail,
				comic: dado.comic,
			};
		});
		console.log();
		return res.json({ dados });
	}
}

export { ComicsConsulta };