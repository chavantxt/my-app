import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clickCounter: number = 0;

  name:String='';

  constructor() { }

  ngOnInit(){}

  countClick() {
    this.clickCounter += 1;
  }


}
