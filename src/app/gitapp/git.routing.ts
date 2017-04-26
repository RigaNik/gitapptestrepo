import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GitComponent} from './git/git.component';
import {RepodetailsComponent} from "app/gitapp/repodetails/repodetails.component";

const gitRoute: Routes = [
  {
    path: '',
    component: GitComponent
  },
  {
    path: ':owner/:name',
    component: RepodetailsComponent
  }
];
export const gitRouting: ModuleWithProviders = RouterModule.forChild(gitRoute);
