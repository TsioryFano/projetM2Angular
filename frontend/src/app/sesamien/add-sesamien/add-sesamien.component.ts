import { Component, OnInit} from '@angular/core';
import { Sesamien } from '../sesamien';

@Component({
  selector: 'app-add-sesamien',
  template: `
    <h2 class="center">Ajouter un Sesamien</h2>
    <app-sesamien-form [sesamien]="sesamien"></app-sesamien-form>
  `
})
export class AddSesamienComponent implements OnInit {

  sesamien: Sesamien;

  ngOnInit(){

    this.sesamien = new Sesamien();

  }

}
