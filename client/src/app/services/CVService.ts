import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { Cv } from '../models/cv';
@Injectable()
export class CVService {
    public API_URL = environment.API_URL+ "/api/CV";

  constructor(private http: HttpClient) {
  }

  public searchCVShortcut (key: string): Observable<any>{
    let formData = {
      key: key
    };
    return this.http.post(this.API_URL + '/SearchCVShortcut/',formData);
  }

  public insertCV(formData: Cv): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/InsertCV', formData, {headers: header});
  }

  public getCV(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/GetCV/'+id);
  }

  public checkCV(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + '/CheckCV', {headers: header});
  }

  public CreateOrUpdate(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+"/CreateOrUpdate", {headers: header});
  }

  public UpdateCV(formData: Cv): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL+"/UpdateCV",formData, {headers: header});
  }

  public GetTop10CVNewest ():Observable<any>{
    return this.http.get(this.API_URL+"/GetTop10CVNewest");
  }

  public GetLinkCV(id: number): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+"/GetLinkCV/"+id, {headers: header});
  }
}