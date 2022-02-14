import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Panen } from 'src/app/models/panen';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanenService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';

  listPanen(): Observable<Panen[]> {
    return this.http.get<Panen[]>(`${this.baseUrl}/panen/all`)
      .pipe(
        catchError(this.handleError<Panen[]>('getPanen', []))
      );
  }

  createPanen(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/panen/store`, data)
      .pipe(
        catchError(this.handleError<Panen[]>('createPanen', []))
      );
  }

  // view panen
  showPanen(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/panen/show/${id}`)
  }

  //delete kolam 
  deletePanen(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/panen/${id}/destroy`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }



}
