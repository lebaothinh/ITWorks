import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
import { LaborerandAdmin } from '../models/LaborerandAdmin';
@Injectable()
export class LaborerandAdminService {
  
  public API_URL = environment.API_URL+ "/api/LaborerandAdmin";
  public urlForgetPassword = environment.API_URL_CLIENT+ "/forgetpassword";

  constructor(private http: HttpClient) {
  }
  public getAllLaA(): Observable<any> {
    return this.http.get(this.API_URL + "/GetAllLaborerandAdmin");
  }
  public getLaA(): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + "/GetLaborerandAdmin/", {headers: header});
  }
  public insertLaA(formRegister: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/InsertLaborer', formRegister.value);
  }
  public deleteLaA(id: number): Observable<any> {
    return this.http.delete(this.API_URL + "/DeleteLaborerandAdmin/" + id);
  }
  public updateLaA(formRegister: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/UpdateLaborerandAdmin', formRegister.value, { headers: header });
  }
  public login(formLogin: FormGroup): Observable<any> {
    return this.http.post(this.API_URL + '/Login', formLogin.value);
  }
  public changePassword(formData: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/ChangePassword', formData.value, { headers: header });
  }

  public getAllLaborerandAdminByAdmin(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/GetAllLaborerandAdminByAdmin', { headers: header });
  }
  public insertByAdmin(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/InsertByAdmin', { headers: header });
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
  public forgetPassword (email: string): Observable<any>{
    return this.http.get(this.API_URL + "/ForgetPassword/?email="+email+"&urlChangePassword="+this.urlForgetPassword)
  }
  public getForgetPassword (formData: FormGroup): Observable<any>{
    return this.http.post(this.API_URL + "/GetForgetPassword",formData.value);
  }
  public getListAdminAccountByAdmin(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+"/GetListAdminAccountByAdmin", {headers:header});
  }
  public getListLaborerAccountByAdmin(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+"/GetListLaborerAccountByAdmin", {headers:header});
  }
}
