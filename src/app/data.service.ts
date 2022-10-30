import { Injectable } from '@angular/core';

import { Card } from './card/card';

import { Cards } from './card/cards-data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getCards(): Card[] {
    return Cards;
  }

  getCard(id: Number) {
    return Cards.find((card) => card.id == id);
  }
}
