import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { AngularTemplateComponent } from './page/angular-template/angular-template.component';

@NgModule({
  declarations: [
    AngularTemplateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TemplateModule { }
