import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Kualitasair } from 'src/app/models/kualitasair';

@Injectable({
  providedIn: 'root'
})
export class KualitasAirService {

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';

  constructor(private http: HttpClient) { }


  listKualitasAir(): Observable<Kualitasair[]> {
    return this.http.get<Kualitasair[]>(`${this.baseUrl}/inputkualitasair/all`)
      .pipe(
        catchError(this.handleError<Kualitasair[]>('getKualitasAir', []))
      );
  }


  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/inputkualitasair/store`, data)
      .pipe(
        catchError(this.handleError<Kualitasair[]>('getKualitasAir', []))
      );
  }

  deleteKualitasAir(id: any): Observable<Kualitasair[]> {
    return this.http.delete<Kualitasair[]>(`${this.baseUrl}/inputkualitasair/${id}/destroy`).
      pipe(
        catchError(this.handleError<Kualitasair[]>('deleteKualitasAir', []))
      )
  }




  // handle error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }
}
