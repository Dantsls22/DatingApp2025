import { Component, Input, signal } from '@angular/core';
import { Register } from "../account/register/register";
import { User } from '../../user';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { //con un enumerado tambien se puede, esto es modo registro
  @Input({ required: true }) membersFromApp: User[]= []; // recibe datos del padre (app component)
  protected registerMode = signal(false);

  showRegister(): void {
    this.registerMode.set(true);
  }
}
