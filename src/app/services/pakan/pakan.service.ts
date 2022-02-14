import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pakan } from 'src/app/models/pakan';

@Injectable({
  providedIn: 'root'
})
export class PakanService {

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';

  constructor(private http: HttpClient) { }

  listPakan(): Observable<Pakan[]> {
    return this.http.get<Pakan[]>(`${this.baseUrl}/inputpakan/all`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/inputpakan/store`, data)
      .pipe(
        catchError(this.handleError<Pakan[]>('stok pakan', []))
      );
  }

  // handle error
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }

  deleteAllPakan(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/inputpakan/${id}/destroy`);
  }


}
