import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitModule } from './gitapp/git.module';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    GitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
