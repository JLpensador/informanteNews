import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    ' https://newsapi.org/v2/top-headlines?country=br&apiKey=25b59aafe88e4065888a7737f8c7710f';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
