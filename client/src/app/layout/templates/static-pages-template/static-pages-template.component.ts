import { Component, Input, OnInit } from '@angular/core';
import { IStaticPage } from 'src/app/models/interfaces/staticPageInterface';

@Component({
  selector: 'app-static-pages-template',
  templateUrl: './static-pages-template.component.html',
  styleUrls: ['./static-pages-template.component.less']
})
export class StaticPagesTemplateComponent implements OnInit {

  @Input() data!: IStaticPage;
  
  constructor() { }

  ngOnInit(): void { }

}
