import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitComponent } from './git/git.component';
import { gitRouting } from './git.routing';
import {GitService} from './git.service';
import {FormsModule} from "@angular/forms";
import { RepolistComponent } from './repolist/repolist.component';
import { RepodetailsComponent } from './repodetails/repodetails.component';

@NgModule({
  imports: [
    CommonModule,
    gitRouting,
    FormsModule
  ],
  declarations: [
    GitComponent,
    RepolistComponent,
    RepodetailsComponent
  ],
  providers: [
    GitService
  ]
})
export class GitModule { }
