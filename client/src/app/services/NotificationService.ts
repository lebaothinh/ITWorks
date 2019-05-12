import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MakeQuestion } from '../models/MakeQuestion';
import { environment } from 'src/environments/environment';


@Injectable()
export class NotificationService {
    public API_URL = environment.API_URL+ "/api/Notification";

  constructor(private http: HttpClient) {
  }
  public GetNotifications(): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + '/GetNotifications/', {headers: header});
  }
}