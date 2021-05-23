import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/users';

class UserController {
	async index(req: Request, res: Response) {
		return res.json({ userID: req.userId });
	}
	async create(req: Request, res: Response) {
		const { email, password } = req.body;

		const userRepository = getRepository(User);

		const userExists = await userRepository.findOne({ where: { email } });

		if (userExists) {
			res.status(409).json({ message: 'Usuario existente ' });
		}

		const user = userRepository.create({ email, password });

		await userRepository.save(user);

		return res.status(201).json({ user });
	}

}

export { UserController };
