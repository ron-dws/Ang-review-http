import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, Allroutes } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PremierCicleComponent } from './components/premier-cicle.component';
// import { SecondCicleComponent } from './components/second-cicle/second-cicle.component';
 import { PremierCicleServiceService } from './services-files/premier-cicle-service.service';

@NgModule({
  declarations: [
    AppComponent,
    // PremierCicleComponent,
    // SecondCicleComponent
    Allroutes,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PremierCicleServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
