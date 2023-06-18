import { Component, OnInit } from '@angular/core';
import { Imaincard } from '../../Model/main-card';
import { maincard } from '../../const/main-card';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {

 cardArray : Imaincard[]  = maincard

  constructor() { }

  ngOnInit(): void {
  }

}
