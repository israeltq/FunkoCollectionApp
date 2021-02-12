import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { NewFunkoComponent } from './page/new-funko/new-funko.component';

@NgModule({
  declarations: [
    NewFunkoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FunkoModule { }
