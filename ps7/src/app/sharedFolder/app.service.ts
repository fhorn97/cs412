import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  loadData(cityName: string): Observable<any> {
    const url = 'localhost:3000/ps4';
    return this.http.post(url, {city: cityName});
  }
}

