import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.sass' ],
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  imgSrc = [
    'https://coureses.oss-cn-hangzhou.aliyuncs.com/abcTime-h5/groupBuy/tip_buy.png',
    'https://coureses.oss-cn-hangzhou.aliyuncs.com/abcTime-h5/groupBuy/weixin.png'
  ];
  index = 0;
  values = '';

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const {snapshot: {params: {id}}} = this.route
    // const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(+id)
      .subscribe(hero => this.hero = hero);
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  changeStatus(): void {
    // console.log(111, this.canPlay);
    this.index = this.index === 1 ? 0 : 1;
  }

  onKey(value: string) {
    this.values += value + ' | ';
  }
}
