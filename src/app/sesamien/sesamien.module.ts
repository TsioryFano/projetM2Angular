import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListSesamienComponent } from './list-sesamien/list-sesamien.component';
import { DetailSesamienComponent } from './detail-sesamien/detail-sesamien.component';
import { BorderCardDirective } from './border-card.directive';
import { SesamienMentionColorPipe } from './sesamien-mention-color.pipe';
import { SesamienService } from './sesamien.service';
import { FormsModule } from '@angular/forms';
import { SesamienFormComponent } from './sesamien-form/sesamien-form.component';
import { EditSesamienComponent } from './edit-sesamien/edit-sesamien.component';
import { AddSesamienComponent } from './add-sesamien/add-sesamien.component';
import { SearchSesamienComponent } from './search-sesamien/search-sesamien.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const sesamienRoutes: Routes = [
  {path:'edit/sesamien/:id', component: EditSesamienComponent, canActivate: [AuthGuard]},
  {path:'sesamien/add', component: AddSesamienComponent, canActivate: [AuthGuard]},
  {path:'sesamiens', component: ListSesamienComponent, canActivate: [AuthGuard]},
  {path:'sesamien/:id', component: DetailSesamienComponent, canActivate: [AuthGuard]}
];
 
@NgModule({
  declarations: [
    ListSesamienComponent,
    DetailSesamienComponent,
    BorderCardDirective,
    SesamienMentionColorPipe,
    SesamienFormComponent,
    EditSesamienComponent,
    AddSesamienComponent,
    SearchSesamienComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(sesamienRoutes)
  ],
  providers:  [SesamienService]
})
export class SesamienModule { }
