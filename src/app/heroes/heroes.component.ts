import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { IHero } from './../core/entity/i-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeros();
  }

  heroes: IHero[] = [];
  selectedHero?: IHero;

  getHeros(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }
}
