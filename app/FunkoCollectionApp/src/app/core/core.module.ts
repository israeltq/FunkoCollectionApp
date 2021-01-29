import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class CoreModule { }
