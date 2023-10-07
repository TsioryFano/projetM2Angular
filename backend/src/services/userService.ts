// services/userService.ts
import oracledb from 'oracledb';
import { User } from '../models/userModel';
import { config } from '../config/config';

async function executeQuery(query: string, binds: any, outFormat: number = oracledb.OUT_FORMAT_OBJECT): Promise<User | null> {
  try {
    // Récupérez la connexion à la base de données Oracle à partir du pool
    const connection = await oracledb.getConnection({
      user: config.db.user,
      password: config.db.password,
      connectString: config.db.connectString,
    });

    // Exécutez la requête avec les données fournies
    const result = await connection.execute(query, binds, {
      outFormat: outFormat, // Renvoyer le résultat sous forme d'objet
    });

    // Vérifiez si result.rows est défini avant d'y accéder
    if (result.rows && result.rows.length > 0) {
      // Fermez la connexion à la base de données
      await connection.close();

      // Utilisez la déclaration 'as' pour indiquer que vous savez que result.rows[0] est de type User
      const userResult = result.rows[0] as User;

      // Vérifiez si userResult est bien de type User
      if (isUser(userResult)) {
        return userResult;
      } else {
        console.error('Résultat inattendu lors de l\'opération.');
        // Gérez cette situation d'erreur selon vos besoins
        return null; // Ou lancez une exception personnalisée
      }
    } else {
      console.error('Aucune ligne renvoyée lors de l\'opération.');
      // Gérez cette situation d'erreur selon vos besoins
      return null; // Ou lancez une exception personnalisée
    }
  } catch (error) {
    console.error('Erreur lors de l\'opération:', error);
    throw error; // Gérez les erreurs selon vos besoins, par exemple, en lançant une exception personnalisée.
  }
}

// Définissez la fonction pour vérifier si un objet est de type User
function isUser(obj: any): obj is User {
    return obj && typeof obj === 'object' && 'username' in obj && 'email' in obj && 'password' in obj;
  }
  

// ---------------------------
// Fonction Création d'un utilisateur
// ---------------------------
export async function createUser(userData: User): Promise<User | null> {
  const insertQuery = `
    INSERT INTO users (username, email, password)
    VALUES (:username, :email, :password)
    RETURNING id, username, email
  `;

  return executeQuery(insertQuery, {
    username: userData.username,
    email: userData.email,
    password: userData.password,
  });
}

// ---------------------------
// Fonction récupération d'information d'un utilisateur par son ID
// ---------------------------
export async function getUserById(userId: number): Promise<User | null> {
  const selectQuery = `
    SELECT id, username, email
    FROM users
    WHERE id = :userId
  `;

  return executeQuery(selectQuery, {
    userId: userId,
  });
}

// ---------------------------
// Fonction mise à jour d'information d'un utilisateur
// ---------------------------
export async function updateUser(userId: number, updatedUserData: Partial<User>): Promise<User | null> {
  const updateQuery = `
    UPDATE users
    SET username = :newUsername, email = :newEmail
    WHERE id = :userId
    RETURNING id, username, email
  `;

  return executeQuery(updateQuery, {
    newUsername: updatedUserData.username,
    newEmail: updatedUserData.email,
    userId: userId,
  });
}

// ---------------------------
// Fonction suppression d'un utilisateur par son Id
// ---------------------------
export async function deleteUser(userId: number): Promise<boolean> {
  const deleteQuery = `
    DELETE FROM users
    WHERE id = :userId
  `;

  try {
    // Récupérez la connexion à la base de données Oracle à partir du pool
    const connection = await oracledb.getConnection({
      user: config.db.user,
      password: config.db.password,
      connectString: config.db.connectString,
    });

    // Exécutez la requête de suppression avec le paramètre userId
    const result = await connection.execute(deleteQuery, {
      userId: userId,
    });

    // Vérifiez si des lignes ont été affectées par la suppression
    const rowsAffected = result.rowsAffected || 0;

    // Fermez la connexion à la base de données
    await connection.close();

    // Vérifiez si au moins une ligne a été supprimée
    return rowsAffected > 0;
  } catch (error) {
    console.error('Erreur lors de la suppression de l\'utilisateur:', error);
    throw error; // Gérez les erreurs selon vos besoins, par exemple, en lançant une exception personnalisée.
  }
}
