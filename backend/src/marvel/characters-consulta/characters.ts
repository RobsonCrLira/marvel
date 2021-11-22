import { marvelApi } from '../api-marvel';

class CharactersConsulta {
	async execute() {
		const { data } = await marvelApi.get('/characters');
		const dados = data.data.results.map((dado: any) => {
			return {
				id: dado.id,
				name: dado.name,
				description: dado.description,
				thumbnail: [dado.thumbnail.path, dado.thumbnail.extension],
			};
		});
		return { dados };
	}
	async executeID(id: string) {
		const { data } = await marvelApi.get(`/characters/${id}`);
		const dados = data.data.results.map((dado: any) => {
			return {
				id: dado.id,
				name: dado.name,
				description: dado.description,
				thumbnail: [dado.thumbnail.path, dado.thumbnail.extension],
			};
		});
		return { dados };
	}
}

export { CharactersConsulta };
