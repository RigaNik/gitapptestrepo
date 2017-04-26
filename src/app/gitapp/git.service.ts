import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {
  private url = 'https://api.github.com/';

  constructor(private _http: Http) {
  }

  public getRepos(search: string): Observable<any> {
    return this._http.get(this.url + 'search/repositories?q=' + search).map(res=>res.json());
  }

  public getRepo(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name).map(res=>res.json());
  }

  public getIssues(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name + '/issues?sort=updated').map(res=>res.json());
  }

  public getCommits(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name + '/commits').map(res=>res.json());
  }

  public getBranches(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name + '/branches').map(res=>res.json());
  }

}
