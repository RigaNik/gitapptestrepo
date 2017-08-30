import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitComponent } from './git/git.component';
import { gitRouting } from './git.routing';
import { GitService } from './git.service';
import { RepolistComponent } from './repolist/repolist.component';
import { RepodetailsComponent } from './repodetails/repodetails.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    gitRouting,
    HttpModule
  ],
  declarations: [
    GitComponent,
    RepolistComponent,
    RepodetailsComponent
  ],
  providers: [
    GitService,
  ]
})
export class GitModule { }
