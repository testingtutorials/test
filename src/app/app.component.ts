import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crash-todolist';
  name:string = 'Marcus';

  constructor() {
    this.changeName('Dudas');
  }

  changeName(name:string):void {
    this.name = name;
  }
}
