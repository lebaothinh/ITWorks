import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class LocationService {
  public API_URL = environment.API_URL+ "/api/Location";

  constructor(private http: HttpClient) {
  }
  
  public getLocation(id: number): Observable<any>{
    return this.http.get(this.API_URL+"/GetLocation/"+id);
  }

  public getLocations (idCompany: number): Observable<any>{
    return this.http.get(this.API_URL+"/GetLocations/"+idCompany);
  }

  public getLocationsByToken(): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL+"/GetLocationsByToken", {headers: header})
  }
  public insertLocation(formData: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/InsertLocation', formData.value, { headers: header });
  }
  public deleteLocation(id: number): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.API_URL + '/DeleteLocation/' + id, { headers: header });
  }
  public updateLocation(formUpdate: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/UpdateLocation', formUpdate.value, { headers: header });
  }
}