// src/app/services/config.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = '/api/config'; // L'URL de votre endpoint de configuration

  public config: any; // Stockez ici votre configuration

  constructor(private http: HttpClient) { }

  public loadConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
