import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class ForgetPasswordService {
  public API_URL = environment.API_URL+ "/api/ForgetPassword";

  constructor(private http: HttpClient) {
  }
  public isExist(value: string): Observable<any> {
    return this.http.get(this.API_URL + '/isExist/'+value);
  }
  public isType(value: string): Observable<any> {
    return this.http.get(this.API_URL + '/isType/'+value);
  }
}