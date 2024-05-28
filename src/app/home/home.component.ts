import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  clickCounter: number = 0;

  name:String='';

  isGreater:boolean=false;

  constructor() { }

  ngOnInit(){}

  countClick() {
    this.clickCounter += 1;
    if(this.clickCounter>4)
      this.isGreater=true;
  }


}
