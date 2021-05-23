import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
	id: string;
	iat: number;
	exp: number
}
export default function authMiddlewares(req: Request, res: Response, next: NextFunction) {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.sendStatus(401);
	}
	const token = authorization.replace('Bearer', '').trim();

	try {
		const data = jwt.verify(token, 'stone');
		const { id } = data as TokenPayload;
		req.userId = id;

	} catch {
		return res.sendStatus(401);
	}
}