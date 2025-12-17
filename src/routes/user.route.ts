import { Router, Request, Response } from 'express';
import { UserModel } from '../models/user.model';

const router = Router();

/**
 * POST /users
 * Body: { name: string, interestedLanguage: string }
 */
router.post('/users', async (req: Request, res: Response) => {
  try {
    const { name, interestedLanguage } = req.body;

    if (!name || !interestedLanguage) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const user = await UserModel.create({
      name,
      interestedLanguage
    });

    return res.status(201).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Unknown error' });
  }
});

/**
 * GET /api/v1/users
 * Fetch all users
 */
router.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = await UserModel.find().lean();

    return res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Unknown error' });
  }
});


export default router;
