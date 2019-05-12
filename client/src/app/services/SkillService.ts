import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class SkillService {
  public API_URL = environment.API_URL+ "/api/Skill";

  constructor(private http: HttpClient) {
  }
  public GetAllSkills(): Observable<any> {
    return this.http.get(this.API_URL + '/GetAllSkills');
  }

  public GetSkillsByIDJob(idJob: number): Observable<any> {
    return this.http.get(this.API_URL + '/GetSkillsByIDJob/' + idJob);
  }

  public FindoutSkills(key: String): Observable<any> {
    let formData = {
      key: key
    }
    return this.http.post(this.API_URL + '/FindoutSkills', formData);
  }

  public AddSkill(id: number): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + '/AddSkill/' + id, { headers: header });
  }

  public RemoveSkill(id: number): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.API_URL + '/RemoveSkill/' + id, { headers: header });
  }
}