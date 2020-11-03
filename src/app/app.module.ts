import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { HttpClientModule } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImageModelComponent } from './image-model/image-model.component';


const appRoutes: Routes = [
  { path: 'imageview', component:ImageViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ImageViewComponent,
    ImageModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
