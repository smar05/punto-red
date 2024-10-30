import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ipurchase } from 'src/app/interfaces/i-purchase';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buy-recharge',
  templateUrl: './buy-recharge.component.html',
  styleUrls: ['./buy-recharge.component.css'],
})
export class BuyRechargeComponent implements OnInit {
  private supplierId: string | null = null;
  public rechargeForm!: FormGroup;
  public successMessage: string = '';
  public errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.getSupplierId();
    this.initRechargedForm();
  }

  private getSupplierId(): void {
    this.route.queryParams.subscribe((params) => {
      this.supplierId = params['supplierId'];

      if (!this.supplierId) {
        this.router.navigate(['/login']);
      }
    });
  }

  private initRechargedForm(): void {
    this.rechargeForm = this.fb.group({
      cellPhone: ['', [Validators.required, Validators.pattern('^3[0-9]{9}$')]],
      value: [
        '',
        [Validators.required, Validators.min(1000), Validators.max(100000)],
      ],
      supplierId: [this.supplierId, Validators.required],
    });
  }

  public buyRecharge(): void {
    if (!this.rechargeForm.valid) {
      this.errorMessage = 'Por favor, completa el formulario correctamente.';
      this.successMessage = '';
      return;
    }

    const purchase: Ipurchase = {
      cellPhone: this.rechargeForm.get('cellPhone')?.value,
      value: this.rechargeForm.get('value')?.value,
      supplierId: this.rechargeForm.get('supplierId')?.value,
    };

    this.apiService.buyRecharge(purchase).subscribe(
      (response) => {
        this.successMessage =
          'Recarga exitosa. ID de transacción: ' + response.transactionalID;
        this.errorMessage = '';
        this.rechargeForm.reset();
      },
      (error) => {
        this.errorMessage = 'Error al realizar la recarga: ' + error.message;
        this.successMessage = '';
        this.router.navigate([`/login`]);
      }
    );
  }
}
