import {Component, OnInit} from '@angular/core';
import {GitService} from "../git.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Repo} from "../repo.model";
import {Issue} from "../issue.model";
import {Commit} from "../commit.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {

  constructor(private _gitService: GitService, private _route: ActivatedRoute, private _router: Router) {
  }

  public repoDetails: Repo;
  public issues: Issue[] = [];
  public commits: Commit[] = [];
  public branches: Observable<any>;
  public saved: Boolean = false;

  ngOnInit() {
    this.getRepo();
  }

  private getRepo() {
    let name: string;
    let owner: string;
    this._route.params.subscribe(params => {
      owner = params['owner'];
      name = params['name'];
      this._gitService.getRepo(owner, name).subscribe(item => {
        this.repoDetails = new Repo(item.id, item.name, item.stargazers_count, item.created_at, item.owner.login, item.owner.avatar_url, item.full_name, item.description, item.language, item.forks, item.watchers, item.clone_url);
      });
      this._gitService.getIssues(owner, name).subscribe(data => {
        for (let i = 0; i < 5; i++) {
          let new_issue = new Issue(data[i].id, data[i].title, data[i].html_url);
          this.issues.push(new_issue);
        }
      });
      this._gitService.getCommits(owner, name).subscribe(data => {
        for (let i = 0; i < 5; i++) {
          let new_commit = new Commit(data[i].sha, data[i].commit.message, data[i].html_url);
          this.commits.push(new_commit);
        }
      });
      this.branches = this._gitService.getBranches(owner, name);
    });
  }


  public saveRepo(repo: Repo) {
    window.localStorage.setItem('repo-' + repo.fullname, JSON.stringify(repo));
    this.saved = true;
  }

  public backToHome() {
    this._router.navigate(['/']);
  }
}
