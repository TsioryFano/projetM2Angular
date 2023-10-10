// user-add.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User, UserRole } from '../user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
})
export class UserAddComponent implements OnInit {
  user: User = new User(
    0, // Remplacez par l'ID approprié
    '', // Prénom
    '', // Nom de famille
    '', // Adresse électronique
    '', // Mot de passe
    '', // Nom d'utilisateur
    UserRole.Visiteur, // Remplacez par le rôle approprié (par exemple, UserRole.Etudiant)
    '', // Sériation (si applicable)
    [] // Matières enseignées (si applicable)
  );

    userRoles = Object.values(UserRole); // Récupérez la liste des rôles d'utilisateur

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    // Assurez-vous que l'utilisateur est administrateur (ou ajoutez une vérification de rôle)
    if (this.user.role === UserRole.Administrateur) {
      this.userService.createUser(this.user).subscribe((newUser) => {
        // Redirigez l'utilisateur vers la liste des utilisateurs après la création réussie
        this.router.navigate(['/user']);
      });
    } else {
      // Cas où l'utilisateur n'a pas les droits nécessaires
    console.error("Vous n'avez pas les droits nécessaires pour effectuer cette opération.");
    }
  }
}
