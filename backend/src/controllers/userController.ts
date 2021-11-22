import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UserRepository';

class UserController {
	async index(req: Request, res: Response) {
		return res.json({ userID: req.userId });
	}
	async create(req: Request, res: Response) {
		const { nome, email, password, data_nasc } = req.body;

		const userRepository = getCustomRepository(UsersRepository);

		const userExists = await userRepository.findOne({ where: { email } });

		if (userExists) {
			res.status(409).json({ message: 'Usuario existente' });
		}

		const user = userRepository.create({ nome, email, password, data_nasc });

		await userRepository.save(user);

		return res.status(201).json({ user });
	}
	async userID(req: Request, res: Response) {
		const { id } = req.params;

		const userRepository = getCustomRepository(UsersRepository);

		const user = await userRepository.findOne({ id: id });

		if (!user) {
			res.status(401).json({ message: 'Usuario não existente ' });
		}

		return res.status(200).json({ user });
	}

}

export { UserController };
