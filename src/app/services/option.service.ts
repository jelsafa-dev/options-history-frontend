import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  url = "option"

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Option[]> {
    return this.http.get<Option[]>(`${environment.apiUrl}/${this.url}`);
  }

  public update(option?: Option): Observable<Option[]> {
    return this.http.put<Option[]>(`${environment.apiUrl}/${this.url}`, option);
  }

  public create(option?: Option): Observable<Option[]> {
    return this.http.post<Option[]>(`${environment.apiUrl}/${this.url}`, option);
  }

  public delete(option?: Option): Observable<Option[]> {
    return this.http.delete<Option[]>(`${environment.apiUrl}/${this.url}/${option?.id}`);
  }
}
