import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Kolam } from 'src/app/models/kolam';

@Injectable({
  providedIn: 'root'
})
export class KolamService {

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';

  constructor(private http: HttpClient) { }

  listKolam(): Observable<Kolam[]> {
    return this.http.get<Kolam[]>(`${this.baseUrl}/kolam/all`)
      .pipe(
        catchError(this.handleError<Kolam[]>('getKolam', []))
      );
  }

  

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/kolam/store`, data)
      .pipe(
        catchError(this.handleError<Kolam[]>('getKolam', []))
      );
  }

  // view kolam
  showKolam(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/kolam/show/${id}`)
  }

  //delete kolam 
  deleteKolam(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/kolam/${id}/destroy`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }

  // errorHandler(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(errorMessage);
  // }



  // listKolam(): Observable<Kolam[]> {
  //   return this.http.get<Kolam[]>(`${this.baseUrl}/kolam/all`);
  // }

}
