import {Injectable} from '@angular/core';

import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = 'f7f2faa7247d5e192fa8';
  private client_secret ='6f3ec8bfacdeb2f22c488a280163a0ee05d27baa';

  constructor(private _http: Http){
    console.log('Github Service Ready');
    this.username = 'lifeavi';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
      return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

  updateUser(username:string){
    this.username = username;
  }
}
