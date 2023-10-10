import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SesamienModule } from './sesamien/sesamien.module';
import { FormsModule } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './shared/config.service';
import { UserAddComponent } from './user/user-add/user-add.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    SesamienModule,
    AppRoutingModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
