import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAuth } from 'src/app/interfaces/i-auth';
import { AlertsService } from 'src/app/services/alerts.service';
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

  constructor(
    private apiService: ApiService,
    private router: Router,
    private alertsService: AlertsService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  public login(): void {
    const auth: IAuth = { user: this.user, password: this.password };

    this.apiService.authenticate(auth).subscribe(
      (response) => {
        const token: string = response.token;
        if (!token) {
          localStorage.clear();
          this.errorAlert();
          return;
        }
        localStorage.setItem('token', token);
        this.router.navigate([`/suppliers`]);
      },
      (error) => {
        localStorage.clear();
        this.errorAlert();
      }
    );
  }

  private errorAlert(): void {
    this.alertsService.basicAlert('Error', 'No se ha podido loguear', 'error');
  }
}
