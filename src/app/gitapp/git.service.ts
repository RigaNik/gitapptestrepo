import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {
  private url = 'https://api.github.com/';
  private client_id = '4f4d65e8040d2cba561b';
  private client_secret = '72a1638516b068defa6a479c8a77c312742738dd'

  constructor(private _http: Http) {
  }

  public getRepos(search: string): Observable<any> {
    return this._http.get(this.url + 'search/repositories?q=' + search + '&client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res=>res.json());
  }

  public getRepo(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res=>res.json());
  }

  public getIssues(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name + '/issues?sort=updated&client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res=>res.json());
  }

  public getCommits(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name + '/commits?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res=>res.json());
  }

  public getBranches(owner: string, name: string){
    return this._http.get(this.url + 'repos/' + owner + '/' + name + '/branches?client_id=' + this.client_id + '&client_secret=' + this.client_secret).map(res=>res.json());
  }

}
