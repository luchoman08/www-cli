import { Component , OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  title = 'My First Angular App';
  selectedHero: Hero

  constructor(private heroService: HeroService) { 
    
  }
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
 
  ngOnInit(): void {
    this.getHeroes();
  }
 
  onSelect(hero){
    this.selectedHero = hero;
  }
}


