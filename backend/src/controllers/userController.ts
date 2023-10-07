// controllers/userController.ts
import { Request, Response } from 'express';
import { User } from '../models/userModel';
import { userService } from '../services/userService';

// Exemple de gestion de la création d'un utilisateur
export async function createUser(req: Request, res: Response) {
  try {
    const userData: User = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
}

// Autres fonctions de contrôleur pour la gestion des utilisateurs...