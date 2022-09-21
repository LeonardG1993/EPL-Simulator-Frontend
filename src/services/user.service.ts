import { Prediction } from './../models/prediction';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { url } from 'src/environments/environment';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = url + `/user`;
  predictionUrl: string = url + `/prediction/user`;

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  findUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${username}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  findUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.userUrl}`, user, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  getMyPredictions(id: number): Observable<Prediction[]>{
    return this.http.get<Prediction[]>(`${this.predictionUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse){
    
    if (httpError.error instanceof ErrorEvent){
      console.log('An error has occured: ', httpError.error.message);
    } else {
      console.error(`
      Backend returned code ${httpError.status}
      with body: ${httpError.error}`)
    }

    return throwError(() => new Error('something went wrong'));
  }
}
