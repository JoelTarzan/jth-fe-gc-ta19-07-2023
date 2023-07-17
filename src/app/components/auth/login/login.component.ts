import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  login(): void {

    if (this.email == '' || this.password == '') {
      alert('Porfavor complete todos los campos.');

    } else {
      this.email = '';
      this.password = '';
    }
  }
}