import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AngularYandexMapsModule } from "angular8-yandex-maps";
import { AppComponent } from "./app.component";
import { ContactsPopupComponent } from "./contacts-popup/contacts-popup.component";
import { HeaderComponent } from "./header/header.component";
import { LocationComponent } from "./location/location.component";
import { MainComponent } from "./main/main.component";
import { ServiceComponent } from "./main/service/service.component";
import { ExamplesComponent } from './main/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsPopupComponent,
    MainComponent,
    ServiceComponent,
    LocationComponent,
    ExamplesComponent,
  ],
  imports: [
    BrowserModule,
    AngularYandexMapsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
