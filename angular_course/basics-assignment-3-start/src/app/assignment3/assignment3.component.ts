import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  isSecretMessageVisible = false;
  listOfClicks = [];
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick() {
    this.listOfClicks.push('Button was Clicked');
    this.isSecretMessageVisible = !this.isSecretMessageVisible;
  }

}
