"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// utils/tokenUtils.js
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var jwt = require('jsonwebtoken');
var secretKey = process.env.JWT_SECRET; // Remplacez par votre clé secrète réelle
if (!secretKey) {
    console.error('La clé secrète JWT n\'est pas définie dans le fichier .env');
    process.exit(1);
}
function generateToken(user) {
    var payload = {
        id: user.id,
        username: user.username,
        role: user.role, // Vous pouvez inclure d'autres données utilisateur si nécessaire
    };
    var options = {
        expiresIn: '1h', // Durée de validité du jeton (par exemple, 1 heure)
    };
    return jwt.sign(payload, secretKey, options);
}
module.exports = { generateToken: generateToken };
