import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Importez le service UserService pour récupérer la liste des utilisateurs
import { User } from '../user.model'; // Importez le modèle User
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Déclarez une variable pour stocker la liste des utilisateurs

  constructor(
    private userService: UserService,
    private router: Router
    ) {}

  ngOnInit(): void {
    // Dans la méthode ngOnInit, appelez le service pour récupérer la liste des utilisateurs
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data; // Affectez les données récupérées à la variable users
    });
  }
  
  goToUserDetail(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}