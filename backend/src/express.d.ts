import { Request } from 'express';
import { User } from './models/userModel'; // Assurez-vous que le chemin est correct

declare global {
  namespace Express {
    interface Request {
      user?: User; // Utilisez le type User pour les informations de l'utilisateur
    }
  }
}