import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MakeQuestion } from '../models/MakeQuestion';
import { environment } from 'src/environments/environment';


@Injectable()
export class MakeQuestionService {
    public API_URL = environment.API_URL+ "/api/MakeQuestions";

  constructor(private http: HttpClient) {
  }
  public GetAllQuestion(id: number): Observable<any>{
    return this.http.get(this.API_URL + '/GetAllQuestion/'+id);
  }
  public GetAllQuestionByCompany(): Observable<any> {
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(this.API_URL + '/GetAllQuestionByCompany/',{headers: header});
  }

  public AnswerQuestion(makeQuestion: MakeQuestion): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/AnswerQuestion',makeQuestion, {headers: header});
  }

  public AddAQuestion(makeQuestion: MakeQuestion): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.API_URL + '/AddAQuestion',makeQuestion, {headers: header});
  }
  public UpdateQuestionByLaborer(makeQuestion: MakeQuestion): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/UpdateQuestionByLaborer',makeQuestion, {headers: header});
  }
  public RemoveQuestionByAdmin(id: number): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete(this.API_URL + '/RemoveQuestionByAdmin/'+id, {headers: header});
  }
  public AnswerQuestionByAdmin(makeQuestion: MakeQuestion): Observable<any>{
    let header = new HttpHeaders();
    header = header.append('Authorization', localStorage.getItem('token'));
    header = header.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put(this.API_URL + '/AnswerQuestionByAdmin',makeQuestion, {headers: header});
  }

}