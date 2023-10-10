"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    var _a;
    // Obtenez le jeton JWT depuis la requête (peut être dans les en-têtes, les cookies, etc.)
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        // Si le jeton n'est pas présent, renvoyez une réponse non autorisée
        return res.status(401).json({ message: 'Non autorisé' });
    }
    // Remplacez 'votre_clé_secrète' par votre propre clé secrète
    var secretKey = process.env.JWT_SECRET;
    // Vérifiez le jeton JWT et extrayez les informations de l'utilisateur
    jsonwebtoken_1.default.verify(token, secretKey, function (err, decoded) {
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
        req.user = decoded;
        // Passez à la prochaine étape du middleware
        next();
    });
}
exports.authMiddleware = authMiddleware;
