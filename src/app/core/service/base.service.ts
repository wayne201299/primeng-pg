import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  constructor(protected http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http.get(environment.baseApiUrl + url);
  }
}
