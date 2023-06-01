import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsFormComponent } from './components/steps-form/steps-form.component';
import { MainFormsComponent } from './components/main-forms/main-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    StepsFormComponent,
    MainFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
