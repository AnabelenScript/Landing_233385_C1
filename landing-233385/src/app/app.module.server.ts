import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MainModule } from '../main/main.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MainModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
