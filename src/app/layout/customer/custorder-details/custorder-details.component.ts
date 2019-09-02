import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { CustomerDetailsService } from 'src/shared/services/customer-details.service';

@Component({
  selector: 'app-custorder-details',
  templateUrl: './custorder-details.component.html',
  styleUrls: ['./custorder-details.component.scss']
})
export class CustorderDetailsComponent implements OnInit {
  @Input() informationDetails: any;
  public customerDetails: boolean = false;
  public orderList: any = [];
  public orderDetails: any = [];
  public noDataFound: boolean = false;
  constructor(private customerDetailsService: CustomerDetailsService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.informationDetails && this.informationDetails) {
      if (this.informationDetails.Action === 'Details') {
        this.customerDetails = true;
      } else {
        this.customerDetails = false;
        this.customerDetailsService.getorderLlist().subscribe(response => {
          if (response) {
            this.orderList = response;
            this.orderDetails = this.orderList.filter(x => x.orderId === this.informationDetails.orderId)[0];
            this.noDataFound = false;
          } else {
            this.noDataFound = true;
          }
        });
        debugger;
      }
    }
  }

}
