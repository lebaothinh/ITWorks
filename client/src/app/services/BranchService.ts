import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class BranchService {
    public API_URL = environment.API_URL+ "/api/Branch";

  constructor(private http: HttpClient) {
  }
  public insertBranch(formData: FormGroup): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/InsertBranch', formData.value, { headers: header });
  }
}