import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { EMAIL_REGEX } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  form!: FormGroup;
  responseData: any;
     formData: any;

  constructor(private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    private toastr: ToastrService) {

    this.form = this.fb.group({

      name: ['', [Validators.required]],

      email: ['', [Validators.required,
      Validators.minLength(6),
      Validators.pattern(EMAIL_REGEX)]],

      password: ['', [Validators.required,
      Validators.minLength(4)]],

      repeatPass: ['', [Validators.required]],
    },

      {
        validators: this.isPasswordsMatch('password', 'repeatPass')
      },
    )
  }

  ngOnInit(): void {
      
    this.service.userProfile()

      .subscribe(u => {

        this.responseData = u.user
        this.form.controls['name'].setValue(this.responseData.name);
        this.form.controls['email'].setValue(this.responseData.email);

      });
  }

  isPasswordsMatch(password: any, repeatPass: any) {

    return (formgroup: FormGroup) => {

      let pass = formgroup.controls[password];
      let repass = formgroup.controls[repeatPass];

      if (repass.errors && !repass.errors['isPasswordsMatch']) {
        return;
      }

      if (pass.value !== repass.value) {

        repass.setErrors({ isPasswordsMatch: false });

      } else {

        repass.setErrors(null);
      }

    };
  }


  updateProfile() {

    if(this.form.valid){

    this.service.updateUserProfile(this.form.value).subscribe(u => {
      this.formData = u;
      this.toastr.success('Successfully updated.', 'Thank you!');
      this.router.navigate(['']);
    })
    
    }
    
  }

}
