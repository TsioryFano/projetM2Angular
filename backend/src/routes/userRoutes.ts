// routes/userRoutes.ts
import express from 'express';
import * as userController from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Création d'un nouvel utilisateur (accessible uniquement aux administrateurs)
router.post('/users', authMiddleware, userController.createUser);

// Autres routes pour la gestion des utilisateurs...

export default router;
