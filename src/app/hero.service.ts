import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Hero } from "./hero.model";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  heroes$ = new BehaviorSubject<Hero[]>([
    {
      id: 1,
      name: "Batman",
    },
    {
      id: 2,
      name: "Arqueiro Verde",
    },
    {
      id: 3,
      name: "Antman",
    },
  ]);

  getHeros(): Observable<Hero[]> {
    return this.heroes$.asObservable();
  }

  getHero(id: number): Observable<Hero> {
    return this.heroes$.pipe(
      map((heroes) => heroes.find((hero) => hero.id == id))
    );
  }

  setHero(updatedHero: Hero) {
    this.heroes$.next(
      this.heroes$.value.map((h) => {
        if (h.id == updatedHero.id) h = { ...updatedHero };

        return h;
      })
    );
  }
}
