import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../core/services/hero/hero.service';
import { IHero } from './../../core/entity/i-hero';
import { MessageService } from './../../core/services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

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
    this.messageService.add(`HeroesComponent: Selected hero id=${ hero.id }`);
  }
}
