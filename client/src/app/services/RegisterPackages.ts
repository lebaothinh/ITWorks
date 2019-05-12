import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class RegisterPackagesService {
    public API_URL = environment.API_URL+ "/api/RegisterPackages";

  constructor(private http: HttpClient) {
  }
  public GetAllPackages(): Observable<any> {
    return this.http.get(this.API_URL + '/GetAllPackages');
  }

  public GetAllPackagesStatus(): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + '/GetAllPackagesStatus', {headers: header});
  }

  public GetSkillsByIDJob(idJob: number): Observable<any>{
    return this.http.get(this.API_URL + '/GetSkillsByIDJob/'+idJob);
  }

}