import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  inAuthPage: boolean = false;
  currentPage: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        this.inAuthPage = (event.url === '/login' || event.url === '/register');
        this.currentPage = event.url;
      }
      
    });
  }
}