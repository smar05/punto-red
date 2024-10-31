import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Itransactions } from 'src/app/interfaces/i-transactions';
import { AlertsService } from 'src/app/services/alerts.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-transaction-query',
  templateUrl: './transaction-query.component.html',
  styleUrls: ['./transaction-query.component.css'],
})
export class TransactionQueryComponent {
  public cellPhone: string = '';
  public transactions: Itransactions[] = [];
  public errorMessage: string = '';

  constructor(
    private apiService: ApiService,
    private alertService: AlertsService,
    private router: Router
  ) {}

  public onSubmit(): void {
    this.apiService.getTransactionsByCellphone(this.cellPhone).subscribe(
      (data) => {
        if (!data || data.length === 0) {
          this.error();
          return;
        }
        this.transactions = data;
      },
      (error) => {
        this.error();
      }
    );
  }

  private error(): void {
    this.alertService.basicAlert('Error', 'Ha ocurrido un error', 'error');
    this.router.navigate(['/login']);
  }
}
