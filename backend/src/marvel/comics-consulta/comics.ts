import { marvelApi } from '../api-marvel';

class ComicsConsulta {
	async execute() {
		const { data } = await marvelApi.get('/comics');
		const dados = data.data.results.map((dado: any) => {
			return {
				id: dado.id,
				name: dado.title,
				description: dado.description,
				thumbnail: [dado.thumbnail.path, dado.thumbnail.extension],
				comic: dado.comic,
			};
		});
		return { dados };
	}
}

export { ComicsConsulta };
