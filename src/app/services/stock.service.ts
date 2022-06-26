import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url = "stock";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${environment.apiUrl}/${this.url}`)
  }

  public create(stock?: Stock): Observable<Stock[]> {
    return this.http.post<Stock[]>(`${environment.apiUrl}/${this.url}`, stock);
  }

  public update(stock?: Stock): Observable<Stock[]> {
    return this.http.put<Stock[]>(`${environment.apiUrl}/${this.url}`, stock);
  }

  public delete(stock?: Stock): Observable<Stock[]> {
    return this.http.delete<Stock[]>(`${environment.apiUrl}/${this.url}/${stock?.id}`);
  }
  
}
