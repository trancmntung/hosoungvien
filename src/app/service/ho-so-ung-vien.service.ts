import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HoSoUngVien } from '../model/HoSoUngVien.model';

@Injectable({
  providedIn: 'root'
})
export class HoSoUngVienService  {

  private apiUrl = 'https://localhost:7053/api/';
  https =inject(HttpClient)


  constructor(private http: HttpClient) { }

  getHoSoUngViens(): Observable<any> {
    return this.https.get("https://localhost:7053/api/HoSoUngVien")
    //.pipe(
     // catchError(this.handleError)
    ;
  }

  getHoSoUngVienById(id: number): Observable<HoSoUngVien> {
    return this.http.get<HoSoUngVien>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createHoSoUngVien(hoSoUngVien: HoSoUngVien): Observable<HoSoUngVien> {
    return this.http.post<HoSoUngVien>(this.apiUrl, hoSoUngVien).pipe(
      catchError(this.handleError)
    );
  }

  updateHoSoUngVien(hoSoUngVien: HoSoUngVien): Observable<HoSoUngVien> {
    return this.http.put<HoSoUngVien>(`${this.apiUrl}/${hoSoUngVien.id}`, hoSoUngVien).pipe(
      catchError(this.handleError)
    );
  }

  deleteHoSoUngVien(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    // A client-side or network error occurred. Handle it accordingly.
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
