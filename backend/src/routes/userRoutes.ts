// routes/userRoutes.ts
import express from 'express';
import * as userController from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

// Création d'un nouvel utilisateur (accessible uniquement aux administrateurs)
router.post('/users', authMiddleware, userController.createUser);

// Modification d'un utilisateur (accessible uniquement aux administrateurs et aux professeurs pour leur propre profil)
router.put('/users/:id', authMiddleware, userController.updateUser);

// Suppression d'un utilisateur (accessible uniquement aux administrateurs)
router.delete('/users/:id', authMiddleware, userController.deleteUser);

// Obtention des détails d'un utilisateur (accessible uniquement aux administrateurs et aux professeurs pour leur propre profil)
router.get('/users/:id', authMiddleware, userController.getUserById);

// Obtention de la liste de tous les utilisateurs (accessible uniquement aux administrateurs)
router.get('/users', authMiddleware, userController.getAllUsers);

export default router;
