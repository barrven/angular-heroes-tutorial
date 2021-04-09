import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'; //created interface to loosely couple
//import { HEROES } from '../mock-heroes'; 
import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //implements the hero interface
  // selectedHero?: Hero;
  
  // heroes = HEROES; //list of heroes pulled from db (simulated)

  heroes: Hero[] = [];

  //The parameter simultaneously defines a private heroService 
  //property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //best practice to call this here rather than in the constructor
  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  //asynchronous version
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(res => this.heroes = res);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
