import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FormGroup } from '@angular/forms';
@Injectable()
export class FileUploadService {
    public API_URL = environment.API_URL+ "/api/FileUpload";

    constructor(private http: HttpClient) {
    }

    uploadLogo(fileToUpload: File): Observable<any> {
        let header = new HttpHeaders();
        header = header.append('Authorization', localStorage.getItem('token'));
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload);
        return this.http.post(this.API_URL+'/UploadLogo', formData, { headers: header });
    }

    uploadAvatar(fileToUpload: File): Observable<any> {
        let header = new HttpHeaders();
        header = header.append('Authorization', localStorage.getItem('token'));
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post(this.API_URL+'/UploadAvatar', formData, { headers: header });
    }

    uploadCV(fileToUpload: File): Observable<any> {
        let header = new HttpHeaders();
        header = header.append('Authorization', localStorage.getItem('token'));
        const formData: FormData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return this.http.post(this.API_URL+'/UploadCV', formData, { headers: header });
    }
}
