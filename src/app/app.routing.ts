import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    {
      path: '',
      loadChildren: './gitapp/git.module#GitModule'
    }
  ]
;

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
