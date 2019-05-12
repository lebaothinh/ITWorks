import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class ApplyWorkService {
    public API_URL =  environment.API_URL+ "/api/ApplyWork";

    constructor(private http: HttpClient) {
    }
  
    public getAnApplyByLaborer (): Observable<any> {
        let header = new HttpHeaders();
        header = header.append('Authorization', localStorage.getItem('token'));
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.API_URL + '/getApplyWorkByLaborer/', {headers: header});
    }
  
    public getAnApplyByIDJob (id: number): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(this.API_URL + '/getApplyWorkByJob/'+id, {headers: header});
    }

    public getAnApplyByIDCompany (): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(this.API_URL + '/getApplyWorkByCompany/', {headers: header});
    }
  
    public insertAnApply (formData: FormGroup): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post(this.API_URL + '/InsertApply', formData.value, { headers: header });
    }
  
    public DeleteApply (idJob: number): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.delete(this.API_URL + '/DeleteAnApply/'+idJob, { headers: header });
    }
  
    public ChangeStatus (formData: FormGroup): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.put(this.API_URL + '/ChangeStatus/',formData.value ,{ headers: header });
    }

    public AcceptAndSendEmail (formData: Object): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.put(this.API_URL + '/AcceptAndSendEmail/',formData ,{ headers: header });
    }

    public AcceptAndContactLater (formData: Object): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.put(this.API_URL + '/AcceptAndContactLater/',formData ,{ headers: header });
    }

    public SetStatusByCompany (formData: Object): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.put(this.API_URL + '/SetStatusByCompany/',formData ,{ headers: header });
    }

    public GetContactList(): Observable<any>{
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(this.API_URL + '/GetContactList/',{ headers: header });
    }
}