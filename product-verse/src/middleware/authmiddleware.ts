import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export class authMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      if (typeof decoded === 'object' && 'id' in decoded) {
        req.userId = decoded.id as number;
        next();
      } else {
        return res.status(403).json({ error: 'Invalid token payload' });
      }
    } catch (e) {
      return res.status(403).json({ e });
    }
  }
}
