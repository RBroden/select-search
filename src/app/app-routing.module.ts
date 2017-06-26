import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { FormOneComponent } from './forms/form-one.component';
import { FormTwoComponent } from './forms/form-two.component';

const appRoutes: Routes = [
    { path: '', component: FormOneComponent },
    { path: 'two', component: FormTwoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}