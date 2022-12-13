import { Component, OnInit } from '@angular/core';
import { IHero } from './../core/entity/i-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  hero1: IHero = {
    id: 1,
    name: 'Windstorm',
    power: 'Handle the wind'
  }
}
