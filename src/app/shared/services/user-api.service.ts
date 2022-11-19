import { Injectable } from '@angular/core';
import {HttpClient, HttpStatusCode} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {catchError, Observable, of, throwError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  public get(): void {
    // const test$ = this.http.get( environment.apiUrl + 'api/users');
    const test$ = this.http.get( environment.apiUrl + 'api/user/10').pipe(catchError(this.handleError));
    //

    // test$.pipe(
    //   catchError(this.handleError)
    // );


    test$.pipe().subscribe(data => console.log(data));
  }

  private handleError(error: HttpErrorResponse): Observable<null> {
    if (error.status === HttpStatusCode.NotFound) {
      return of(null);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
