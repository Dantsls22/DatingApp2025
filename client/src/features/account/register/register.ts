import { Component, input } from '@angular/core';
import { RegisterCreds } from '../../../types/registerCreds';
import { FormsModule } from '@angular/forms';
import { User } from '../../../user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  membersFromHome = input.required<User[]>(); // recibe datos del padre (home component)
  protected creds = {} as RegisterCreds;

  register(): void {
    console.log(this.creds);
    // Aquí iría la lógica para registrar al usuario
  }

  cancel(): void {
    console.log("Cancel executed");
    // Aquí iría la lógica para cancelar el registro
  }

}
