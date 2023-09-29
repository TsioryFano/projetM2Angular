import { Component, OnInit } from '@angular/core';
import { Sesamien } from '../sesamien';
import { Router } from '@angular/router';
import { SesamienService } from '../sesamien.service';

@Component({
  selector: 'app-list-sesamien',
  templateUrl: './list-sesamien.component.html'
})
export class ListSesamienComponent implements OnInit {
  sesamienList: Sesamien[];

  constructor(
    private router: Router,
    private sesamienService: SesamienService
  ) {}

  ngOnInit(){
    this.sesamienService.getSesamienList()
      .subscribe(sesamienList => this.sesamienList = sesamienList); 
  }

  goToSesamien(sesamien: Sesamien){
    this.router.navigate(['/sesamien',sesamien.id]);
  }

}
