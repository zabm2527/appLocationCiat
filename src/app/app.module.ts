import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from "@agm/core";
import { ServicesApiRest } from "src/global-service/services";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC9PnuRk42kbCPMOvsfHpn40r5SoyN38zI",
      libraries: ["places", "drawing", "geometry"],
    }),
    HttpClientModule,
  ],
  providers: [ServicesApiRest],
  bootstrap: [AppComponent],
})
export class AppModule {}
