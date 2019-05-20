import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MomentModule } from 'angular2-moment'

import { AppComponent } from './app.component'
import { DeckService } from './core/service/deck.service'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
