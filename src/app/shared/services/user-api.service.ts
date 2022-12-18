import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { User, UserLogInRequest } from "../../main/constants/interface";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  //test API
  public get(): void {
    const test$ = this.http.get<User>( environment.apiUrl + 'api/user/1').pipe(catchError(this.handleError));
    test$.pipe().subscribe(data => console.log(data));
  }

  public logIn(request: UserLogInRequest): Observable<User | null> {
    //TODO Подставлять сразу request
    return this.http.post<User | null>( environment.apiUrl + 'api/user/login', {
      'login': request.login,
      'password': request.password
    })
      .pipe(catchError(this.handleError));
  }

  public logInWithoutPassword(login: string): Observable<User | null> {
    //TODO Подставлять сразу request
    return this.http.post<User | null>( environment.apiUrl + 'api/user/login-without-password', {
      'login': login,
    })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<null> {
    if (error.status === HttpStatusCode.NotFound) {
      // return of(error.error);
      return of(null);
    }

    if (error.status === HttpStatusCode.BadRequest) {
      //TODO Выводить ошибку бека
      // return of(error.error);
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
