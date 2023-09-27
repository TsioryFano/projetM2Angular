import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean= false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean>{
    const isLoggeIn = (name == 'sesamien' && password == 'sesamien');
    return of(isLoggeIn).pipe(
      delay(1000),
      tap((isLoggedIn: boolean) => this.isLoggedIn = isLoggedIn)
    );
  }

  logout(){
    this.isLoggedIn = false;
  }
}
