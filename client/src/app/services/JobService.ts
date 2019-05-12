import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Injectable()
export class JobService {
    public API_URL = environment.API_URL+ "/api/Job";

  constructor(private http: HttpClient) {
  }
  public getAllJobs (): Observable<any> {
    return this.http.get(this.API_URL + '/GetAllJobs');
  }

  public getAJob (idJob: number): Observable<any> {
    return this.http.get(this.API_URL + '/GetAJob/'+idJob);
  }

  public getTop5Job(IDCompany: number):Observable<any>{
    return this.http.get(this.API_URL+"/GetAShortcutJob/"+IDCompany);
  }

  public getAllJobsByCompany (): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + '/GetAllJobsByCompany/', {headers: header});
  }

  public insertAJob (formData: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/InsertAJob', formData.value, { headers: header });
  }

  public updateAJob (formData: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/UpdateAJob', formData.value, { headers: header });
  }

  public deleteAJob (idJob: number): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.API_URL + '/DeleteAJob/'+idJob, { headers: header });
  }

  public searchJobs (keywords: string): Observable<any>{
    return this.http.get(this.API_URL + '/SearchJobs/'+ keywords);
  }

  public getAllShortcutJobs(): Observable<any>{
    return this.http.get(this.API_URL + '/GetAllShortcutJobs');
  }
}