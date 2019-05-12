import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class ProfileService {
  public API_URL = environment.API_URL+ "/api/Profile";

  constructor(private http: HttpClient) {
  }
  
  public getAvatar(){
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+'/GetAvatar', {headers: header});
  }

  public getID(){
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    console.log(header);
    return this.http.get(this.API_URL+'/GetID', {headers: header});
  }

  public logout(){
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+'/Logout', {headers: header});
  }

  public authLaborer(){
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
  //  header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+'/AuthLaborer',{headers: header});
  }
  public authCompany(){
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
  //  header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+'/AuthCompany',{headers: header});
  }
  public authAdmin(){
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
  //  header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+'/AuthAdmin',{headers: header});
  }
  public testTypeUser(){
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+'/TestTypeUser', {headers: header});
  }

  public checkAdmin(): Observable<any>{
    return this.http.get(this.API_URL+'/checkAdmin/'+localStorage.getItem('token'));
  }
}
