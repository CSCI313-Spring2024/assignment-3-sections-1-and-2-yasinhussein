import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { Router } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
  }).catch((err) => console.error(err));