import { Component, input, output } from '@angular/core';
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
  cancelRegister = output<boolean>(); // emite eventos al padre (home component)
  protected creds = {} as RegisterCreds;

  register(): void {
    console.log(this.creds);
    // Aquí iría la lógica para registrar al usuario
  }

  cancel(): void {
    this.cancelRegister.emit(false); // Notifica al padre que se ha cancelado el registro
  }

}
