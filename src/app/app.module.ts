import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { TopheadingComponent } from './shared/topheading/topheading.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TopheadingComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    provideClientHydration(),
    NewsapiservicesService,
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
