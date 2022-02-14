import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Tambak } from 'src/app/models/tambak';

@Injectable({
  providedIn: 'root'
})
export class TambakService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';

  getTambak(): Observable<Tambak[]> {
    return this.http.get<Tambak[]>(`${this.baseUrl}/tambak/all`);
  }


  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tambak/store`, data)
      .pipe(
        catchError(this.handleError<Tambak[]>('getKolam', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }
}
