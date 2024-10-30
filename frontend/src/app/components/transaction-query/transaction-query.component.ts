import { Component } from '@angular/core';
import { Itransactions } from 'src/app/interfaces/i-transactions';
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

  constructor(private apiService: ApiService) {}

  public onSubmit(): void {
    this.apiService
      .getTransactionsByCellphone(this.cellPhone)
      .subscribe((data) => {
        this.transactions = data;
      });
  }
}
