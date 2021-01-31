import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NewUserComponent } from './modules/auth/page/new-user/new-user.component';
import { NewFunkoComponent } from './modules/funko/page/new-funko/new-funko.component';
import { AngularTemplateComponent } from './modules/template/page/angular-template/angular-template.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      { path: 'template', component: AngularTemplateComponent },
      { path: 'new-user', component: NewUserComponent },
      { path: 'new-funko', component: NewFunkoComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
