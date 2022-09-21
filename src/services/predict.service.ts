import { Prediction } from './../models/prediction';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  predictionUrl: string = url + `/prediction`;

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  findAllPredictions(): Observable<Prediction[]>{
    return this.http.get<Prediction[]>(this.predictionUrl, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  findPredictionById(id: number): Observable<Prediction>{
    return this.http.get<Prediction>(`${this.predictionUrl}/${id}`, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  uploadPrediction(prediction: any): Observable<Prediction> {
    return this.http.post<Prediction>(`${this.predictionUrl}`, prediction, this.httpOptions)
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
