import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../main/content/content.component';
import { SecondComponentComponent } from '../secondview/second-component/second-component.component';
import { ThirdContentComponent } from '../thirdview/third-content/third-content.component';


const routes: Routes = [
  {path: "", component: ContentComponent},
  {path: "oaxaca", component: SecondComponentComponent },
  {path: "procedimientos", component: ThirdContentComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
