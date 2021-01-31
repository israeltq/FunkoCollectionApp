import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-template',
  templateUrl: './angular-template.component.html',
  styleUrls: ['./angular-template.component.css']
})
export class AngularTemplateComponent implements OnInit {
  title = 'FunkoCollectionApp';

  constructor() { }

  ngOnInit(): void {
  }

}
