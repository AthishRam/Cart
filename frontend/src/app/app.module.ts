import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio'
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardComponent } from './payment/card/card.component';
import { BhimComponent } from './payment/bhim/bhim.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    routingComponent,
    FilterPipe,
    CardComponent,
    BhimComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
   MatIconModule,
   MatButtonModule,
   FlexLayoutModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatButtonToggleModule,
   MatStepperModule,
   MatFormFieldModule,
   MatToolbarModule,
   MatInputModule,
   MatCardModule,
   MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
