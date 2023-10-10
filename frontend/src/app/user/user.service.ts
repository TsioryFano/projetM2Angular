// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = '/api/users'; // Remplacez par l'URL de votre API backend
    getUsers: any;

  constructor(private http: HttpClient) {}

  // Créer un nouvel utilisateur
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  // Récupérer un utilisateur par son ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${userId}`);
  }

  // Mettre à jour les informations d'un utilisateur
  updateUser(userId: number, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${userId}`, updatedUser);
  }

  // Supprimer un utilisateur par son ID
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${userId}`);
  }

  // Ajoutez d'autres méthodes de service en fonction de vos besoins
}