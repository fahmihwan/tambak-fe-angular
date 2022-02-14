import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { stok_pakan } from 'src/app/models/stok_pakan';


@Injectable({
  providedIn: 'root'
})
export class StokPakanService {

  baseUrl: string = 'http://ayo-nambak.gamainformatika.com:3000/public';

  constructor(private http: HttpClient) { }

  listStokPakan(): Observable<stok_pakan[]> {
    return this.http.get<stok_pakan[]>(`${this.baseUrl}/stok/all`)
  }

  // insert kolam
  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/stok/store`, data)
      .pipe(
        catchError(this.handleError<stok_pakan[]>('stok pakan', []))
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

  // deleteKolam(id: any): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/kolam/${id}/destroy`);
  // }
  // pemberian pakan
  deleteALlPakan(id: any) {
    return id;
  }
}
