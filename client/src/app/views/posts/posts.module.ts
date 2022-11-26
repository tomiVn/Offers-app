import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';



@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatButtonModule,
    NgOptimizedImage
  ]
})
export class PostsModule { }
