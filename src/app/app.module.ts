import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom modules
import { AgmCoreModule } from '@agm/core';

// Components
import { AppComponent } from './app.component';

// Pipes

// Services

@NgModule({
  declarations: [
    // Components
    AppComponent,

    // Pipes

    // Services
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
