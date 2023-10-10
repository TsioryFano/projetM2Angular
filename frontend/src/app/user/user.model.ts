// user.model.ts

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
    role: UserRole; // UserRole peut être une énumération (enum) définissant les rôles
  
    // Propriétés spécifiques aux professeurs
    seriation: string; // Par exemple, "scientifique" ou "littéraire"
    matieresEnseignees: string[]; // Tableau des matières enseignées par le professeur
  
    constructor(
      id: number,
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      username: string,
      role: UserRole,
      seriation?: string,
      matieresEnseignees?: string[]
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.username = username;
      this.role = role;
      this.seriation = seriation || ''; // Par défaut, la valeur est une chaîne vide
      this.matieresEnseignees = matieresEnseignees || []; // Par défaut, un tableau vide
    }
  }
  
  // Énumération pour les rôles d'utilisateur
  export enum UserRole {
    Administrateur = 'Administrateur',
    Professeur = 'Professeur',
    Visiteur = 'Visiteur',
  }
  