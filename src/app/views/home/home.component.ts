import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  count: number;
  updated: EventEmitter<any> = new EventEmitter<any>();
  output: string;



  constructor() {
    this.count = 0;
    this.updated.subscribe(
      () => this.output = this.count.toString());
  }

  ngOnInit() {
  }

  onClick() {
    this.count++;
    this.updated.emit();
  }

}
