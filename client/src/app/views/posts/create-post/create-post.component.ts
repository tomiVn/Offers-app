import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent implements OnInit {
  
  form!: FormGroup;
  constructor( private createFormService: FormFactoryService,
               private postsService: PostsService) {
    this.form = this.createFormService.createPost();
   }

  ngOnInit(): void {
  }

  actionForm(){
   
    this.postsService.createPost(this.form.value).pipe(
    take(1))
    .subscribe((res)=> console.log(res)
    )
  }
}
