import { Component, OnInit } from '@angular/core';
import { IHero } from './../core/entity/i-hero';
import { HEROES } from './../core/mock/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  heroes = HEROES;
  selectedHero?: IHero;

  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }
}
