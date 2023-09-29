import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { SESAMIENS } from './sesamien/mock-sesamien-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const sesamiens = SESAMIENS
    return {sesamiens};
  };
}
