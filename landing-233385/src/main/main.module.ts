import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class MainModule { }
