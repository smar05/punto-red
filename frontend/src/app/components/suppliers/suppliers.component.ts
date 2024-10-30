import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Isuppliers } from 'src/app/interfaces/i-suppliers';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent {
  public suppliers: Isuppliers[] = [];
  public errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getSuppliers();
  }

  private getSuppliers(): void {
    this.apiService.getSuppliers().subscribe(
      (response) => {
        this.suppliers = response;
      },
      (error) => {
        this.router.navigate([`/login`]);
      }
    );
  }
}
