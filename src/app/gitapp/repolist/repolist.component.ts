import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-repolist',
  templateUrl: './repolist.component.html',
  styleUrls: ['./repolist.component.css']
})
export class RepolistComponent implements OnInit {

  @Input() results: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.results.subscribe(data => console.log(data));
  }

}
