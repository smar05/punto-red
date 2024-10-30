import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAuth } from '../interfaces/i-auth';
import { Isuppliers } from '../interfaces/i-suppliers';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public authenticate(auth: IAuth): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, auth);
  }

  public getSuppliers(): Observable<Isuppliers> {
    const token: string = localStorage.getItem('token') || (null as any);
    if (!token) return of(null) as any;
    return this.http.get(`${this.apiUrl}/suppliers`, {
      headers: { Authorization: token },
    }) as any;
  }

  public buyRecharge(
    cellPhone: string,
    value: number,
    supplierId: string
  ): Observable<any> {
    const token: string = localStorage.getItem('token') || (null as any);
    if (!token) return of(null);
    return this.http.post(
      `${this.apiUrl}/buy`,
      { cellPhone, value, supplierId },
      {
        headers: { Authorization: token },
      }
    );
  }
}
