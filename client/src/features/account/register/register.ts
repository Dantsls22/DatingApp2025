import { Component, inject, input, output } from '@angular/core';
import { RegisterCreds } from '../../../types/registerCreds';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private accountService = inject(AccountService);
  cancelRegister = output<boolean>(); // emite eventos al padre (home component)
  protected creds = {} as RegisterCreds;

  register(): void {
    this.accountService.register(this.creds).subscribe({
      next: response =>{
        console.log(response);
        this.cancel();
      },
      error: error => console.log(error)
    });
    // Aquí iría la lógica para registrar al usuario
  }

  cancel(): void {
    this.cancelRegister.emit(false); // Notifica al padre que se ha cancelado el registro
  }

}
