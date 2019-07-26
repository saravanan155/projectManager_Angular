import { Injectable } from '@angular/core';
import { IUser } from './user';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}; 

@Injectable({
    providedIn: 'root'
}
)

export class UserService {
private serviceURL = 'http://localhost:8080/api/v1';

constructor (private http: HttpClient){}

getUsers() :Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.serviceURL}/getUsers`).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
}

getManagers() :Observable<IUser[]>{
  return this.http.get<IUser[]>(`${this.serviceURL}/getManagers`).pipe(
      tap(data => console.log('Managers: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
}

delUser(id : number) : Observable<void>{
    
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

    return this.http.delete<void>(`${this.serviceURL}/deleteUser/${id}`,httpOptions).pipe(
    tap(data => console.log('All: ' + JSON.stringify(data))),
    catchError(this.handleError)
  );
}

addUser(user : IUser) : Observable<void>{
    
  httpOptions.headers.append('Access-Control-Allow-Origin', '*');
  httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');

  return this.http.post<void>(`${this.serviceURL}/addUser`,user,httpOptions).pipe(
  tap(data => console.log('All: ' + JSON.stringify(data))),
  catchError(this.handleError)
);
}

private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

