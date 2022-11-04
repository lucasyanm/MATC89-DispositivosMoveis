import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'ns-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponet implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) {

  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeros();
  }

}
