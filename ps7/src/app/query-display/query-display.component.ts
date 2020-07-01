import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-query-display',
  templateUrl: './query-display.component.html',
  styleUrls: ['./query-display.component.css']
})
export class QueryDisplayComponent implements OnInit, OnChanges {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
  }
}

