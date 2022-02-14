import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Sampling } from 'src/app/models/sampling';

@Injectable({
  providedIn: 'root'
})
export class SamplingService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';


  listSampling(): Observable<Sampling[]> {
    return this.http.get<Sampling[]>(`${this.baseUrl}/inputsampling/all`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/inputsampling/store`, data)
      .pipe(
        catchError(this.handleError<Sampling[]>('tambah samping', []))
      );
  }

  deleteSampling(id: any): Observable<Sampling[]> {
    return this.http.delete<Sampling[]>(`${this.baseUrl}/inputsampling/${id}/destroy`)
      .pipe(
        catchError(this.handleError<Sampling[]>('delete sampling', []))
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
