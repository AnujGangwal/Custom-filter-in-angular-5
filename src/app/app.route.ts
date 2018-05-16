import { RouterModule, Routes } from '@angular/router';
import { FilterDataComponent } from './filter-data/filter-data.component'

export const routes: Routes = [
  { path: '', redirectTo: 'filter', pathMatch: 'full' },
   { component: FilterDataComponent, path: 'filter' },
 
  ]