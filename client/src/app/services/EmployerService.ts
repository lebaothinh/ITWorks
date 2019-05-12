import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class EmployerService {
  public API_URL = environment.API_URL+ "/api/Employer";
  public urlForgetPassword = environment.API_URL_CLIENT+'/forgetpassword';

  constructor(private http: HttpClient) {
  }
  public getAllEmployersByAdmin(): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + "/GetAllEmployersByAdmin", {headers: header});
  }
  public getAllEmployers(): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + "/GetAllEmployers");
  }
  public getEmployer(id: number): Observable<any> {
    return this.http.get(this.API_URL + "/GetEmployer/" + id);
  }
  //them id company
  public insertEmployer(formRegister: FormGroup): Observable<any> {
    console.log("insert");
    let header = new HttpHeaders();
    // header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/InsertEmployer', formRegister.value, { headers: header });
  }
  public deleteEmployer(id: number): Observable<any> {
    return this.http.delete(this.API_URL + "/DeleteEmployer/" + id);
  }
  public updateEmployer(formRegister: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/UpdateEmployer', formRegister.value, { headers: header });
  }

  public updateOverview(formRegister: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/UpdateOverview', formRegister.value, { headers: header });
  }

  public getReview(id: number): Observable<any> {
    return this.http.get(this.API_URL + "/GetReview/" + id);
  }
  public getTop5Jobs(id: number): Observable<any> {
    return this.http.get(this.API_URL + "/GetTop5Jobs/" + id);
  }
  public login(formLogin: FormGroup): Observable<any> {
    return this.http.post(this.API_URL + '/Login', formLogin);
  }
  public changePassword(formData: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/ChangePassword', formData.value, { headers: header });
  }
  public getTop6Employer(): Observable<any>{
    return this.http.get(this.API_URL + "/GetTop6Employers");
  }
  public searchCompany (name: string): Observable<any>{
    return this.http.get(this.API_URL + "/SearchEmployers/"+name);
  }

  public getEmployerByIDJob(id: number): Observable<any>{
    return this.http.get(this.API_URL + "/GetEmployerByIDJob/"+id);
  }
  public forgetPassword (email: string): Observable<any>{
    return this.http.get(this.API_URL + "/ForgetPassword/?email="+email+"&urlChangePassword="+this.urlForgetPassword)
  }
  public getForgetPassword (formData: FormGroup): Observable<any>{
    return this.http.post(this.API_URL + "/GetForgetPassword",formData.value);
  }
  public insertByAdmin(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/InsertByAdmin', { headers: header });
  }
  public updateByAdmin(formRegister: FormGroup): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/UpdateByAdmin/',formRegister.value, { headers: header });
  }
  public deleteByAdmin(id: number): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.API_URL + '/DeleteByAdmin/'+id, { headers: header });
  }

}
