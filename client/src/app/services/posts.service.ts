import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsPathString: string = environment.path + '/posts';

  constructor(private http: HttpClient) { }

  createPost(form: any): Observable<FormData>{

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('file', form.file, form.file.name);
      
    return this.http.post<FormData>(this.postsPathString, formData);
  }
}
