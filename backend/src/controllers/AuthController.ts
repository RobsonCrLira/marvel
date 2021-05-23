import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../models/users';

class AuthController {
	async execute(req: Request, res: Response) {
		const { email, password } = req.body;

		const userRepository = getRepository(User);

		const user = await userRepository.findOne({ where: { email } });

		if (!user) {
			return res.status(401);
		}

		const validPassword = await bcrypt.compare(password, user.password);

		if (!validPassword) {
			return res.status(401);
		}

		const token = jwt.sign({ email: user.email }, 'stone', { expiresIn: '8h' });

		const auth = user.email;

		return res.json({ auth, token });

	}
}

export { AuthController };
