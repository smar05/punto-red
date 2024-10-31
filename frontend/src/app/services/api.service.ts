import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth } from '../interfaces/i-auth';
import { Ipurchase } from '../interfaces/i-purchase';
import { Isuppliers } from '../interfaces/i-suppliers';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public authenticate(auth: IAuth): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth`, auth);
  }

  public getSuppliers(): Observable<Isuppliers[]> {
    const token: string = localStorage.getItem('token') || (null as any);
    if (!token) return of(null) as any;
    return this.http.get(`${this.apiUrl}/suppliers`, {
      headers: { Authorization: token },
    }) as any;
  }

  public buyRecharge(purchase: Ipurchase): Observable<any> {
    const token: string = localStorage.getItem('token') || (null as any);
    if (!token) return of(null);
    return this.http.post(`${this.apiUrl}/buy`, purchase, {
      headers: { Authorization: token },
    });
  }

  public getTransactionsByCellphone(cellPhone: string): Observable<any> {
    const token: string = localStorage.getItem('token') || (null as any);
    if (!token) return of(null) as any;
    const params = new HttpParams().set('cellPhone', cellPhone);
    return this.http.get(`${this.apiUrl}/transactions`, {
      headers: { Authorization: token },
      params,
    }) as any;
  }
}
