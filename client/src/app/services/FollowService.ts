import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class FollowService {
  public API_URL = environment.API_URL+ "/api/FollowEmployer";

  constructor(private http: HttpClient) {
  }
  public setStatusFollow (id: number): Observable<any> {
    let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + "/SetStatusFollow/"+id, {headers: header});
  }
  public getStatusFollow (id: number): Observable<any> {
    let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + "/GetStatusFollow/"+id, {headers: header});
  }
}