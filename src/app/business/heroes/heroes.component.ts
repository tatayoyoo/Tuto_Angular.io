import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../core/services/hero/hero.service';
import { IHero } from './../../core/entity/i-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
