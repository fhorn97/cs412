import { Component, OnInit } from '@angular/core';
import {AppService} from "../sharedFolder/app.service";

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {
  cityName: string;
  queryData: any;
  constructor(private service: AppService) { }

  ngOnInit(): void {
  }
  QueryData(): void {
    this.service.loadData(this.cityName).subscribe(result => {
      this.queryData = result;
    });
  }
}
