import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private location: Location, private router: Router) {}

  public goBack(): void {
    this.location.back();
  }

  public logout(): void {
    this.router.navigate(['/login']);
  }
}
