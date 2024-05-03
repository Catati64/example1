import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first/first.component';
import { NotFoundComponent } from './components/notFound/not-found/not-found.component';

export const routes: Routes = [  { path: 'first-component', component: FirstComponent }
,{ path: 'error', component: NotFoundComponent }];

