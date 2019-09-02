import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  @Output() informationEvent = new EventEmitter<boolean>();

  public list: any = [
    { key: "Details", value: "Details" },
    { key: "Order", value: "Order" },
    { key: "Delete", value: "Delete" }];
  constructor() { }

  ngOnInit() {
  }
  selectedoption = (select) => {
    if (select) {
      this.informationEvent.emit(select);
    }
  }
}
