import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { NewUserComponent } from './page/new-user/new-user.component';

@NgModule({
  declarations: [
    NewUserComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
