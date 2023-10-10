// controllers/userController.ts
import { Request, Response } from 'express';
import { User } from '../models/userModel';
import * as userService from '../services/userService';

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

export async function updateUser(req: Request, res: Response) {
  try {
    const userId: number = parseInt(req.params.id, 10);
    const updatedUserData: Partial<User> = req.body;
    const updatedUser = await userService.updateUser(userId, updatedUserData);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const userId: number = parseInt(req.params.id, 10);
    const deleted = await userService.deleteUser(userId);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const userId: number = parseInt(req.params.id, 10);
    const user = await userService.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
}

