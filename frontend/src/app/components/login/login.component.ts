import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuth } from 'src/app/interfaces/i-auth';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: string = '';
  public password: string = '';
  public token: string = '';
  public errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  public login(): void {
    const auth: IAuth = { user: this.user, password: this.password };

    this.apiService.authenticate(auth).subscribe((response) => {
      localStorage.setItem('token', response.token);
      this.router.navigate([`/suppliers`]);
    });
  }
}
