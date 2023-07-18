import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  inAuthPage: boolean = false;
  currentPage: string = '';

  constructor(
    private router: Router,
    private authService: AuthService
    ) {
  }

  ngOnInit(): void {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        this.inAuthPage = (event.url === '/login' || event.url === '/register');
        this.currentPage = event.url;
      }
      
    });
  }

  logout() {
    this.authService.logout()
    .then(response => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}