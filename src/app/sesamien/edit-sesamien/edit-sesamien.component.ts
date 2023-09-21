import { Component, OnInit} from '@angular/core';
import { Sesamien } from '../sesamien';
import { ActivatedRoute } from '@angular/router';
import { SesamienService } from '../sesamien.service';

@Component({
  selector: 'app-edit-sesamien',
  template: `

    <h2 class="center">Editer {{ sesamien?.name}}</h2>
  
    <p *ngIf="sesamien" class="center">
      <img src="#" alt="">
    </p>
    <app-sesamien-form *ngIf="sesamien" [sesamien]="sesamien"></app-sesamien-form>
  `,
  styles: [
  ]
})
export class EditSesamienComponent implements OnInit {

  sesamien: Sesamien | undefined;

  constructor(
    private route: ActivatedRoute,
    private sesamienService: SesamienService
  ){

  }

  ngOnInit(){
    const sesamienId: string | null = this.route.snapshot.paramMap.get('id'); 
    if (sesamienId) {
      this.sesamienService.getSesamienById(+sesamienId)
        .subscribe(sesamien => this.sesamien = sesamien );
    } else {
      this.sesamien= undefined;
    }
  }

}
