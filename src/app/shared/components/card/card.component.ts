import { Component, Input, OnInit } from '@angular/core';

interface Card{
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardDetail: any;

  constructor() { }

  ngOnInit(): void {
  }

}
