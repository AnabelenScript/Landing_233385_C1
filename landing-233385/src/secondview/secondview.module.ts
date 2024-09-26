import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponentComponent } from './second-component/second-component.component';
import { MainModule } from "../main/main.module";
@NgModule({
  declarations: [
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    MainModule
]
})
export class SecondviewModule { }
