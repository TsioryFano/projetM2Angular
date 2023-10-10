// utils/tokenUtils.js
import * as dotenv from 'dotenv';
import { User } from '../models/userModel';
dotenv.config();
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET; // Remplacez par votre clé secrète réelle

if (!secretKey) {
    console.error('La clé secrète JWT n\'est pas définie dans le fichier .env');
    process.exit(1);
  }

function generateToken(user:User): string {
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role, // Vous pouvez inclure d'autres données utilisateur si nécessaire
  };

  const options = {
    expiresIn: '1h', // Durée de validité du jeton (par exemple, 1 heure)
  };

  return jwt.sign(payload, secretKey, options);
}

module.exports = { generateToken };
