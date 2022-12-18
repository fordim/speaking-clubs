import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { catchError, Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { EventsResponse, UpdateEventsRequest } from "../constants/interface";

@Injectable({
  providedIn: 'root'
})
export class NewYearClubsApiService {

  constructor(private http: HttpClient) { }

  public getEvents(email: string): Observable<EventsResponse | null> {
    return this.http.get<EventsResponse | null>( environment.apiUrl + 'api/new-year-clubs/' + email)
      .pipe(catchError(this.handleError));
  }

  public updateEvents(request: UpdateEventsRequest): Observable<EventsResponse | null> {
    return this.http.post<EventsResponse | null>( environment.apiUrl + 'api/new-year-clubs/update', {
      'email': request.email,
      'events': request.events
    })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<null> {
    if (error.status === HttpStatusCode.NotFound) {
      return of(null);
    }

    if (error.status === HttpStatusCode.BadRequest) {
      return of(null);
    } else {
      console.log(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
