// middlewares/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  // Obtenez le jeton JWT depuis la requête (peut être dans les en-têtes, les cookies, etc.)
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    // Si le jeton n'est pas présent, renvoyez une réponse non autorisée
    return res.status(401).json({ message: 'Non autorisé' });
  }

  // Remplacez 'votre_clé_secrète' par votre propre clé secrète
  const secretKey = process.env.JWT_SECRET!;

  // Vérifiez le jeton JWT et extrayez les informations de l'utilisateur
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      // En cas d'erreur de vérification du jeton, renvoyez une réponse non autorisée
      return res.status(401).json({ message: 'Non autorisé' });
    }

    // Les informations de l'utilisateur sont stockées dans "decoded"
    // Vous pouvez les utiliser pour effectuer des actions spécifiques, comme vérifier les autorisations

    
    if (typeof decoded === 'string') {
        // Gestion du cas où decoded est de type string
        // Cela peut se produire si vous stockez des informations supplémentaires dans le token
        // Avant de stocker l'utilisateur dans req.user, traitez les informations comme nécessaire
        // Par exemple, extrayez des informations utilisateur à partir du token si c'est le cas
        // Ensuite, stockez ces informations dans req.user sous forme d'objet User
        // req.user = ...;
  
        // Vous pouvez également renvoyer une réponse d'erreur si nécessaire
        return res.status(401).json({ message: 'Non autorisé' });
      }
  
      // À ce stade, vous savez que decoded est de type JwtPayload
      // Les informations de l'utilisateur sont stockées dans "decoded"
      // Vous pouvez les utiliser pour effectuer des actions spécifiques, comme vérifier les autorisations
  

    // Ajoutez les informations de l'utilisateur au "req" pour qu'elles soient disponibles dans les routes
    req.user = decoded as User;

    // Passez à la prochaine étape du middleware
    next();
  });
}
