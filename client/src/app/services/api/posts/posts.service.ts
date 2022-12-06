import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  PathString: string = environment.path + '/posts';
  constructor(private http: HttpClient) { }

  newPost(form: NgForm){
    console.log(form);
    
    let formData = new FormData();

    Object.entries( form ).forEach(([ key, value ]) => { 
      formData.append( key, value ) } );

     return this.http.post(this.PathString, formData);

  }
}
