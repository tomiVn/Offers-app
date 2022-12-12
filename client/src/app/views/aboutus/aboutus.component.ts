import { Component, OnInit } from '@angular/core';
import { STATIC_PAGES_DEFAULT_IMAGE } from 'src/app/utils/const';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.less']
})
export class AboutusComponent implements OnInit {
  

  data = {
    title: 'About us.',
    image: STATIC_PAGES_DEFAULT_IMAGE,
    content: 
    [ 
      {
        header: 'We are profecional team promoting tourism service offers.',

        text:  
          [
            'We have business partners in many countries of the world.',
            'Our main aim is to provide quality service to you at a very reasonable cost.',
            'We take special care of our clients during their Travel.',
            '',
            'Our Guides & Tour managers are trained to form a very friendly relation with tourists.'
          ]               
      } 
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }


}
