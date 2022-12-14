import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfPageRoutingModule } from './user-prof-routing.module';

import { UserProfPage } from './user-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfPageRoutingModule
  ],
  declarations: [UserProfPage]
})
export class UserProfPageModule {}
