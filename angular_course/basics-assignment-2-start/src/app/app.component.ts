import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputName = 'Mehryar';
  buttonAvailable = false;
  onChangeInputName(event: Event){
    this.inputName = (event.target as HTMLInputElement).value;
  }

  isButtonAvailable(){
    return this.inputName !== '';
  }
  onClickEmptyName(){
    this.inputName = '';
  }
}
