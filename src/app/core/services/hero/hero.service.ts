import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from '../../entity/i-hero';
import { HEROES } from '../../mock/mock-heroes';
import { MessageService } from './../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('The heroes are ready to be displaying.')
    return heroes;
  }
}
