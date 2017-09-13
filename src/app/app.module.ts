	import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    DashBoardComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	  },
	  
	  {
  path: 'detail/:id',
  component: HeroDetailComponent
},
	  
      
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
