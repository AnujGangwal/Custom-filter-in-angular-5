import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FilterDataService {

  constructor(private http: Http) { }

  getData():Observable<any>{
  const Url = 'https://swapi.co/api/people/'
    var header = new Headers();
    header.append('Content-Type','Application/json');
        return this.http
        .get(Url,{ headers: header})
        .map((res:Response) =>  res.json())
        .catch(this.handleError);
  }

  getFilm(url):Observable<any>{
    const Url = url;
    var header = new Headers();
    header.append('Content-Type','Application/json');
        return this.http
        .get(Url,{ headers: header})
        .map((res:Response) =>  res.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error); 
  }

}
