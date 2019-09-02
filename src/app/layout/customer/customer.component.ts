import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { CustomerDetailsService } from 'src/shared/services/customer-details.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  public showinFormation: boolean = false;
  public customerDetails: any = [];
  public custorderDetails: boolean = false;
  public getinformation: string[] = [];
  public customerModal: string[] = [];
  public showSuccessfullMessage: string = '';
  public showUnsuccessfullMessage: string = '';
  public CustomerList: Object = [];
  public showdelSuccessfullMessage: string = '';
  public showdelUnsuccessfullMessage: string = '';
  @ViewChild('issueDetailsModal', { static: false }) public issueDetailsModal: ModalDirective;

  constructor(private customerDetailsService: CustomerDetailsService) { }

  ngOnInit() {
    this.getAllCustomerList();
  }
  getAllCustomerList = () => {
    this.customerDetailsService.getCustomerList().subscribe(response => {
      if (response) {
        this.CustomerList = response;
      }
    });
  }
  onCreate = () => {
    this.issueDetailsModal.show();
  }

  informationMsg($event) {
    this.getinformation = [];
    this.customerDetails.Action = $event;
    if (this.customerDetails.Action === "Delete") {
      this.customerDetailsService.deleteCustomer(this.customerDetails.id).subscribe(response => {
        if (response) {
          this.showdelSuccessfullMessage = "Customer Delete Successfully";
          this.getAllCustomerList();
        } else {
          this.showdelUnsuccessfullMessage = "Customer Failed Delete"
        } setTimeout(() => {
          this.showdelSuccessfullMessage = '';
          this.showdelUnsuccessfullMessage = '';
        }, 5000);
      });
    } else {
      this.getinformation = this.customerDetails;
      this.custorderDetails = true;
    }
  }
  selectedCusomer = (cust) => {
    this.customerDetails = cust
    this.showinFormation = true;
  }

  insertCustomer = (customerModal) => {
    this.customerDetailsService.addCustomer(customerModal).subscribe(response => {
      if (response) {
        this.showSuccessfullMessage = "Customer Added Successfully";
        this.getAllCustomerList();
      } else {
        this.showUnsuccessfullMessage = "Customer Failed Add"
      }
    });
  }

  closeModal = () => {
    this.issueDetailsModal.hide();
    this.customerModal = [];
    this.showSuccessfullMessage = '';
    this.showUnsuccessfullMessage = '';
  }
}
