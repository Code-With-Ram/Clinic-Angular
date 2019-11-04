import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookingComponent } from './booking/booking.component';
import {RecordService} from './record.service';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { SearchComponent } from './status/search/search.component';
import { TokenComponent } from './status/token/token.component';
import { OptionsComponent } from './status/options/options.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    AdminComponent,
    HomeComponent,
    StatusComponent,
    SearchComponent,
    TokenComponent,
    OptionsComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
