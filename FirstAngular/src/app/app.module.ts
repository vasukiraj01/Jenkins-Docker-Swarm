import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidtemplateformComponent } from './validtemplateform/validtemplateform.component';
import { GreetComponent } from './greet/greet.component';
import { AngulartutorialComponent } from './angulartutorial/angulartutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidtemplateformComponent,
    GreetComponent,
    AngulartutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
