import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { switchMap } from "rxjs";
import { Hero } from "../hero.model";
import { HeroService } from "../hero.service";

@Component({
  selector: "ns-edit",
  templateUrl: "./hero-edit.component.html",
})
export class HeroEditComponet implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private rExtensions: RouterExtensions
  ) {}

  get titulo() {
    return `Editar ${this.hero.name}`;
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.heroService.getHero(+params.get("id"))
        )
      )
      .subscribe((hero: Hero) => (this.hero = hero));
  }

  goBack() {
    this.rExtensions.backToPreviousPage();
  }

  save() {
    this.heroService.setHero(this.hero);
  }
}
