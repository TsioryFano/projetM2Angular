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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userRoutes.ts
var express_1 = __importDefault(require("express"));
var userController = __importStar(require("../controllers/userController"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var router = express_1.default.Router();
// Création d'un nouvel utilisateur (accessible uniquement aux administrateurs)
router.post('/users', authMiddleware_1.authMiddleware, userController.createUser);
// Modification d'un utilisateur (accessible uniquement aux administrateurs et aux professeurs pour leur propre profil)
router.put('/users/:id', authMiddleware_1.authMiddleware, userController.updateUser);
// Suppression d'un utilisateur (accessible uniquement aux administrateurs)
router.delete('/users/:id', authMiddleware_1.authMiddleware, userController.deleteUser);
// Obtention des détails d'un utilisateur (accessible uniquement aux administrateurs et aux professeurs pour leur propre profil)
router.get('/users/:id', authMiddleware_1.authMiddleware, userController.getUserById);
// Obtention de la liste de tous les utilisateurs (accessible uniquement aux administrateurs)
router.get('/users', authMiddleware_1.authMiddleware, userController.getAllUsers);
exports.default = router;
