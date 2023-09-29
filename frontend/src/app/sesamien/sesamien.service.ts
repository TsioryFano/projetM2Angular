import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sesamien } from './sesamien';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable()
export class SesamienService {

  constructor(private http: HttpClient){}

  getSesamienList(): Observable<Sesamien[]> {
    return this.http.get<Sesamien[]>('api/sesamiens').pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> this.handleError(error,[]))
    );
  }

  getSesamienById(sesamienId: number): Observable<Sesamien|undefined>{
    return this.http.get<Sesamien>(`api/sesamiens/${sesamienId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> this.handleError(error,undefined))
    );
  }

  searchSesamienList(term:string):Observable<Sesamien[]>{
    if(term.length <=1) {
      return of([]);
    }

    return this.http.get<Sesamien>(`api/sesamiens/?name=${term}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error)=> this.handleError(error,[]))
    );
  }

  updateSesamien(sesamien: Sesamien): Observable<null> {
    const httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/sesamiens',sesamien, httpOptions).pipe(
     tap((response)=>this.log(response)),
     catchError((error)=>this.handleError(error, null))
    );
 }

 addSesamien(sesamien: Sesamien):Observable<Sesamien> {
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
   };

   return this.http.post<Sesamien>('api/sesamiens', sesamien, httpOptions).pipe(
    tap((response)=>this.log(response)),
     catchError((error)=>this.handleError(error, null))
   );
 }

 deleteSesamienByID(sesamienId: number): Observable<null>{
  return this.http.delete(`api/sesamiens/${sesamienId}`).pipe(
    tap((response)=>this.log(response)),
    catchError((error)=>this.handleError(error, null))
  );
 }

  private log(response: any){
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of (errorValue);
  }

  getSesamienMentionList():string[]{
    return ['S','L'];
  }
}
