import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { PerguntasFrequentesModel } from '../models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
    providedIn: 'root',
})
export class PerguntasfrequentesService {
    constructor(private http: HttpClient) {}

    showConsoleLog(msg: string): void {
        console.log(msg);
    }

    getPerguntasfrequentes(): Observable<PerguntasFrequentesModel[]> {
        return this.http.get<any[]>(`${environment.api}/perguntasfrequentes`);
    }
    // // Handle Errors
    // error(error: HttpErrorResponse) {
    //     let errorMessage = '';
    //     if (error.error instanceof ErrorEvent) {
    //         errorMessage = error.error.message;
    //     } else {
    //         errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    //     }
    //     console.log(errorMessage);
    //     return throwError(errorMessage);
    // }
}
