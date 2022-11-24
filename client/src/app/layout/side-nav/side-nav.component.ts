import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

  formOffers!: FormGroup;
  constructor(private service: FormFactoryService) { }

  ngOnInit(): void {
    this.formOffers = this.service.getDateArange();
  }

  onSubmit(){
    
  }

}
