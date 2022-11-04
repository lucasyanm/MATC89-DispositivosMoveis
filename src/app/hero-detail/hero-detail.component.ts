import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { of, switchMap } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'ns-details',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private rExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(this.heroService.getHero(+params.get('id')))),
    ).subscribe((hero: Hero) => this.hero = hero);
  }

  goBack() {
    this.rExtensions.backToPreviousPage();
  }

}
