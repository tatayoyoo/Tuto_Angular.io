import { Component } from '@angular/core';
import { IHero } from './../../core/entity/i-hero';
import { HeroService } from './../../core/services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  topFiveHeroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {

    this.getTopFiveHeroes();
  }

  getTopFiveHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.topFiveHeroes = heroes.slice(0, 5));
  }
}
