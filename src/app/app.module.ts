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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAfQxUq_9Mz8WVl5CXWVo5k7-ZQvZLTPG8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
