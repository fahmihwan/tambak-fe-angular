import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Siklus } from 'src/app/models/siklus';

@Injectable({
  providedIn: 'root'
})
export class SiklusService {

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';

  constructor(private http: HttpClient) { }

  listSiklus(): Observable<Siklus[]> {
    return this.http.get<Siklus[]>(`${this.baseUrl}/siklus/all`).pipe(
      catchError(this.handleError<Siklus[]>('getSiklus', []))
    )
  }

  showSiklus(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/siklus/show/${id}`)
  }

  createSiklus(data: any): Observable<Siklus[]> {
    return this.http.post<Siklus[]>(`${this.baseUrl}/siklus/store`, data)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }




}
