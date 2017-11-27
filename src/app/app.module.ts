import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// My modules
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
