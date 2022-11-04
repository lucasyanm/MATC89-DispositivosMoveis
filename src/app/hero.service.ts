import { Injectable } from '@angular/core';
import { Hero } from './hero.model';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  heroes: Hero[] = [
    {
      id: 1,
      name: 'Batman',
    },
    {
      id: 2,
      name: 'Arqueiro Verde',
    },
    {
      id: 3,
      name: 'Antman',
    }
  ];

  getHeros(): Hero[] {
    return this.heroes;
  }

  getHero(id: number): Hero {
    return this.heroes.find(hero => hero.id = id);
  }

}
