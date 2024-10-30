import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string =
    'https://us-central1-puntored-dev.cloudfunctions.net/technicalTest-developer/api';

  constructor(private http: HttpClient) {}

  public authenticate(user: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, { user, password });
  }

  public getSuppliers(): Observable<any> {
    const token: string = localStorage.getItem('token') || (null as any);
    if (!token) return of(null);
    return this.http.get(`${this.apiUrl}/getSuppliers`, {
      headers: { Authorization: token },
    });
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
