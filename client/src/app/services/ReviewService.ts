import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class ReviewService {
    public API_URL = environment.API_URL+ "/api/Review";

    constructor(private http: HttpClient) {
    }
  
    public getReviewsByLaborer (): Observable<any> {
        let header = new HttpHeaders();
        header = header.append('Authorization', localStorage.getItem('token'));
        header = header.set('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.API_URL + '/GetReviewsByLaborer/', {headers: header});
    }
  
    public getReviewsByIDCompany (id: number): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(this.API_URL + '/GetReviewsByIDCompany/'+id, {headers: header});
    }
  
    public insertReview (formData: FormGroup): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post(this.API_URL + '/InsertReview', formData.value, { headers: header });
    }
  
    public deleteReview (idEmployer: number): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.delete(this.API_URL + '/DeleteReview'+idEmployer, { headers: header });
    }
  
    public updateReview (formData: FormGroup): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.put(this.API_URL + '/UpdateReview/',formData.value ,{ headers: header });
    }

    public totalReview (id: number): Observable<any> {
      return this.http.get(this.API_URL + '/SumReview/'+id);
    }

    public getAllReviewByAdmin(): Observable<any> {
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get(this.API_URL + '/GetAllReviewByAdmin/', { headers: header });
    }

    public deleteReviewByAdmin(idCompany: number, idLaborer: number){
      let header = new HttpHeaders();
      header = header.append('Authorization', localStorage.getItem('token'));
      header = header.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.delete(this.API_URL + '/DeleteReviewByAdmin?IDCompany='+idCompany+"&IDLaborer="+idLaborer, { headers: header });
    }
}