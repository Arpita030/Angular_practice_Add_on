import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  // ✅ Import HttpClient
import { provideForms } from '@angular/forms';  // ✅ Import Forms

import { PersonListComponent } from './components/person-list/person-list.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

const routes: Routes = [
  { path: '', component: PersonListComponent },
  { path: 'add', component: AddPersonComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideForms()],
};
