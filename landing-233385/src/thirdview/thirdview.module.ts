import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdContentComponent } from './third-content/third-content.component';
import { MainModule } from '../main/main.module';



@NgModule({
  declarations: [
    ThirdContentComponent
  ],
  imports: [
    CommonModule,
    MainModule
  ]
})
export class ThirdviewModule { }
