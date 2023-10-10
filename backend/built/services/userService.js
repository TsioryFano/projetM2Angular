"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.createUser = void 0;
// services/userService.ts
var oracledb_1 = __importDefault(require("oracledb"));
var config_1 = require("../config/config");
function executeQuery(query, binds, outFormat) {
    if (outFormat === void 0) { outFormat = oracledb_1.default.OUT_FORMAT_OBJECT; }
    return __awaiter(this, void 0, void 0, function () {
        var connection, result, userResult, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    return [4 /*yield*/, oracledb_1.default.getConnection({
                            user: config_1.config.db.user,
                            password: config_1.config.db.password,
                            connectString: config_1.config.db.connectString,
                        })];
                case 1:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.execute(query, binds, {
                            outFormat: outFormat, // Renvoyer le résultat sous forme d'objet
                        })];
                case 2:
                    result = _a.sent();
                    if (!(result.rows && result.rows.length > 0)) return [3 /*break*/, 4];
                    // Fermez la connexion à la base de données
                    return [4 /*yield*/, connection.close()];
                case 3:
                    // Fermez la connexion à la base de données
                    _a.sent();
                    userResult = result.rows[0];
                    // Vérifiez si userResult est bien de type User
                    if (isUser(userResult)) {
                        return [2 /*return*/, userResult];
                    }
                    else {
                        console.error('Résultat inattendu lors de l\'opération.');
                        // Gérez cette situation d'erreur selon vos besoins
                        return [2 /*return*/, null]; // Ou lancez une exception personnalisée
                    }
                    return [3 /*break*/, 5];
                case 4:
                    console.error('Aucune ligne renvoyée lors de l\'opération.');
                    // Gérez cette situation d'erreur selon vos besoins
                    return [2 /*return*/, null]; // Ou lancez une exception personnalisée
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_1 = _a.sent();
                    console.error('Erreur lors de l\'opération:', error_1);
                    throw error_1; // Gérez les erreurs selon vos besoins, par exemple, en lançant une exception personnalisée.
                case 7: return [2 /*return*/];
            }
        });
    });
}
// Définissez la fonction pour vérifier si un objet est de type User
function isUser(obj) {
    return obj && typeof obj === 'object' && 'username' in obj && 'email' in obj && 'password' in obj;
}
// ---------------------------
// Fonction Création d'un utilisateur
// ---------------------------
function createUser(userData) {
    return __awaiter(this, void 0, void 0, function () {
        var insertQuery;
        return __generator(this, function (_a) {
            insertQuery = "\n    INSERT INTO users (username, email, password)\n    VALUES (:username, :email, :password)\n    RETURNING id, username, email\n  ";
            return [2 /*return*/, executeQuery(insertQuery, {
                    username: userData.username,
                    email: userData.email,
                    password: userData.password,
                })];
        });
    });
}
exports.createUser = createUser;
// ---------------------------
// Fonction récupération d'information d'un utilisateur par son ID
// ---------------------------
function getUserById(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var selectQuery;
        return __generator(this, function (_a) {
            selectQuery = "\n    SELECT id, username, email\n    FROM users\n    WHERE id = :userId\n  ";
            return [2 /*return*/, executeQuery(selectQuery, {
                    userId: userId,
                })];
        });
    });
}
exports.getUserById = getUserById;
// ---------------------------
// Fonction mise à jour d'information d'un utilisateur
// ---------------------------
function updateUser(userId, updatedUserData) {
    return __awaiter(this, void 0, void 0, function () {
        var updateQuery;
        return __generator(this, function (_a) {
            updateQuery = "\n    UPDATE users\n    SET username = :newUsername, email = :newEmail\n    WHERE id = :userId\n    RETURNING id, username, email\n  ";
            return [2 /*return*/, executeQuery(updateQuery, {
                    newUsername: updatedUserData.username,
                    newEmail: updatedUserData.email,
                    userId: userId,
                })];
        });
    });
}
exports.updateUser = updateUser;
// ---------------------------
// Fonction suppression d'un utilisateur par son Id
// ---------------------------
function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteQuery, connection, result, rowsAffected, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deleteQuery = "\n    DELETE FROM users\n    WHERE id = :userId\n  ";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, oracledb_1.default.getConnection({
                            user: config_1.config.db.user,
                            password: config_1.config.db.password,
                            connectString: config_1.config.db.connectString,
                        })];
                case 2:
                    connection = _a.sent();
                    return [4 /*yield*/, connection.execute(deleteQuery, {
                            userId: userId,
                        })];
                case 3:
                    result = _a.sent();
                    rowsAffected = result.rowsAffected || 0;
                    // Fermez la connexion à la base de données
                    return [4 /*yield*/, connection.close()];
                case 4:
                    // Fermez la connexion à la base de données
                    _a.sent();
                    // Vérifiez si au moins une ligne a été supprimée
                    return [2 /*return*/, rowsAffected > 0];
                case 5:
                    error_2 = _a.sent();
                    console.error('Erreur lors de la suppression de l\'utilisateur:', error_2);
                    throw error_2; // Gérez les erreurs selon vos besoins, par exemple, en lançant une exception personnalisée.
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUser = deleteUser;
