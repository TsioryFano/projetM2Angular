"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    port: process.env.PORT || 5000,
    db: {
        user: process.env.DB_USER || 'your_db_user',
        password: process.env.DB_PASSWORD || 'your_db_password',
        connectString: process.env.DB_CONNECT_STRING || 'localhost:1521/XE', // Connexion Oracle
    },
    jwtSecret: process.env.JWT_SECRET || 'secretKey', // Clé secrète JWT
};
