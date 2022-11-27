import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { PostsService } from 'src/app/services/posts.service';
import { minLength, requiredField } from 'src/app/utils/errorsMessages';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {
  
  form!: FormGroup;
  
  title = 'title';
  titleLabel= 'Title';
  titleErrors = [ requiredField('Title'), minLength(3) ];

  
  constructor( private createFormService: FormFactoryService,
               private postsService: PostsService) {
    this.form = this.createFormService.createPost();
   }

  ngOnInit(): void {
  }

  actionForm(){
   console.log(this.form.value);
   
  //   this.postsService.createPost(this.form.value).pipe(
  //   take(1))
  //   .subscribe((res)=> console.log(res)
  //   )
  }

}
