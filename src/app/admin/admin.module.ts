import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelComponentComponent } from './create-user/model-component/model-component.component';

@NgModule({
  declarations: [
    CreateUserComponent,
    ViewUsersComponent,
    ModelComponentComponent  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
