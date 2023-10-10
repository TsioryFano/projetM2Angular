import crypto from 'crypto';

// Générer une clé secrète aléatoire de 256 bits (32 caractères hexadécimaux)
const secretKey = crypto.randomBytes(32).toString('hex');

console.log('Clé secrète générée :', secretKey);