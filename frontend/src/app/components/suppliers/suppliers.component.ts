import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Isuppliers } from 'src/app/interfaces/i-suppliers';
import { AlertsService } from 'src/app/services/alerts.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent {
  public suppliers: Isuppliers[] = [];
  public errorMessage: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private alertService: AlertsService
  ) {}

  ngOnInit(): void {
    this.getSuppliers();
  }

  private getSuppliers(): void {
    this.apiService.getSuppliers().subscribe(
      (response) => {
        if (!response || response?.length === 0) {
          this.error();
          return;
        }
        this.suppliers = response;
      },
      (error) => {
        this.error();
      }
    );
  }

  public selectSupplier(id: string): void {
    this.router.navigate([`/buy`], { queryParams: { supplierId: id } });
  }

  private error(): void {
    this.alertService.basicAlert('Error', 'Ha ocurrido un error', 'error');
    this.router.navigate([`/login`]);
  }
}
