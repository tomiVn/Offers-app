import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormDataAppend } from 'src/app/utils/form-data-append';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  PathString: string = environment.path + '/posts';
  
  constructor(private http: HttpClient) { }

  newPost(form: NgForm){
    
    let formData = FormDataAppend( form );

     return this.http.post(this.PathString, formData);

  }
}
