// user-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service'; // Assurez-vous d'importer le service utilisateur
import { User } from '../user.model'; // Importez le modèle User

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  userId: number; // Vous pouvez définir le type approprié
  user: User; // Vous devrez importer le modèle User depuis user.model.ts

  constructor(
    private route: ActivatedRoute,
    private userService: UserService // Injectez le service utilisateur
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Obtenez l'ID de l'URL
      this.getUserDetails(); // Chargez les détails de l'utilisateur
    });
  }

  getUserDetails() {
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.user = user;
    });
  }
}
