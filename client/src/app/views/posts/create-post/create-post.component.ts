import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { IFormModel } from 'src/app/models/interfaces/formElementsInterface';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {
  
  form!: FormGroup; 
  titleModel:       IFormModel;
  descriptionModel: IFormModel;

  constructor( private createFormService: FormFactoryService,
               private postsService: PostsService) {
    let formServiceData = this.createFormService.createPost();            
    this.form = formServiceData.form;
    this.titleModel = formServiceData.TitleModel;
    this.descriptionModel = formServiceData.DescriptionModel;
   }

  ngOnInit(): void {
  }

  actionForm(){
   
  //   this.postsService.createPost(this.form.value).pipe(
  //   take(1))
  //   .subscribe((res)=> console.log(res)
  //   )
  }

}
