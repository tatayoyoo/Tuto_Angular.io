import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from '../../entity/i-hero';
import { HEROES } from '../../mock/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
