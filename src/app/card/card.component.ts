import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //title = 'בננה2';
  /*item: Card = {
    id: 1,
    title: '1בננה',
    source: '',
  };*/

  @Input() id?: number;
  @Input() title?: string;
  @Input() image?: string;

  counter: number = 0;
  isHover: boolean = false;
  source: string = '';
  alternate: string = '';

  constructor() {}

  ngOnInit(): void {
    console.log('card id =>', this.id);
    console.log('card title =>', this.title);
    console.log('card image =>', this.image);

    this.source = `../assets/images/${this.image}`;
    this.alternate = `${this.title} image`;
  }

  onPlusClick() {
    console.log('plus clicked');
    this.counter++;
  }

  onMinusClick() {
    console.log('minus clicked');
    this.counter--;
  }

  onCardHoverOn() {
    console.log('card hover on');
    this.isHover = true;
  }

  onCardHoverOff() {
    console.log('card hover off');
    this.isHover = false;
  }
}
