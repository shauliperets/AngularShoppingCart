import { Component, OnInit } from '@angular/core';
//import { Cards } from './card/cards-data';
import { Card } from './card/card';
import { DataService } from './data.service';

@Component({
  selector: 'App',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Shopping Cart';
  cards: Card[] = [];

  constructor(private dataService: DataService) {
    console.log('this.cards list =>', this.cards);
  }

  ngOnInit() {
    this.getCards();
    console.log('in init');
  }

  getCards(): void {
    this.cards = this.dataService.getCards();
    console.log('get cards =>', this.cards);
  }

  onCardClick(card: Card) {
    console.log(`${card.title} is clickd`);
  }
}
