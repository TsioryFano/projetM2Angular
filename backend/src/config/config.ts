export const config = {
    port: process.env.PORT || 5000, // Port du serveur
    db: {
        user: process.env.DB_USER || 'your_db_user',
        password: process.env.DB_PASSWORD || 'your_db_password',
        connectString: process.env.DB_CONNECT_STRING || 'localhost:1521/XE', // Connexion Oracle
      },
      jwtSecret: process.env.JWT_SECRET || 'secretKey', // Clé secrète JWT
    };