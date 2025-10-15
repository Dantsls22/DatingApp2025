import { Component, Input, signal } from '@angular/core';
import { Register } from "../account/register/register";

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { //con un enumerado tambien se puede, esto es modo registro
  protected registerMode = signal(false);

  showRegister(value: boolean): void {
    this.registerMode.set(value);
  }
}
