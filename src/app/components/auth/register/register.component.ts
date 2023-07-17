import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  repeatedPassword: string = '';

  register(): void {
    
    if (this.name == '' || this.email == '' || this.password == '' || this.repeatedPassword != this.password) {
      alert('Porfavor complete todos los campos y asegurese de que las contraseñas coinciden');

    } else {
      this.name = '';
      this.email = '';
      this.password = '';
      this.repeatedPassword = '';
    }
  }
}
