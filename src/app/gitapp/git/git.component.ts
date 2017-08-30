import {Component, OnInit} from '@angular/core';
import {GitService} from '../git.service';
// import {Observable} from "rxjs/Observable";
import { Repo } from "../repo.model";
import { Router } from "@angular/router";


@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  public result: Repo[] = [];
  public localResults: Object[] = [];

  constructor(private _gitService: GitService, private _router: Router) {
  }

  ngOnInit() {
    this.getLocal();
  }

  public clearLocalCache() {
    window.localStorage.clear();
    this.localResults = [];
  }

  public searchGit(search: string) {
    this.result = [];
    this._gitService.getRepos(search).subscribe(data =>
      data.items.forEach(item => {
        let list_item = new Repo(item.id, item.name, item.stargazers_count, item.created_at, item.owner.login, item.owner.avatar_url, item.full_name, item.description, item.language, item.forks, item.watchers, item.clone_url);
        this.result.push(list_item);
      })
    );
  }

  public onSelect(item: Repo){
    this._router.navigate(['/', item.owner, item.name]);
  }

  private getLocal() {
    for (let key in window.localStorage) {
      if (key.indexOf('repo') !== -1) {
        this.localResults.push(JSON.parse(window.localStorage.getItem(key)));
      }
    }
  }
}
