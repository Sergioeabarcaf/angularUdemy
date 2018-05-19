import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LineComponent } from './components/line/line.component';
import { BarComponent } from './components/bar/bar.component';
import { DonutsComponent } from './components/donuts/donuts.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    BarComponent,
    DonutsComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
