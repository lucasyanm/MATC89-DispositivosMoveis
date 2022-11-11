import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Hero } from "../hero.model";
import { HeroService } from "../hero.service";

@Component({
  selector: "ns-list",
  templateUrl: "./hero-list.component.html",
})
export class HeroListComponet implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeros();
  }
}
