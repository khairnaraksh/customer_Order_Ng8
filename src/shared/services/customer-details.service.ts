import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private http: HttpClient) { }

  getCustomerList = () => {
    const url = `http://localhost:3000/Customer`;
    return this.http.get(url).pipe(map(x => x));
  }
  getorderLlist = () => {
    const url = `./../../assets/order.json`;
    return this.http.get(url).pipe(map(x => x));
  }
  addCustomer = (customerModel) => {
    let data = {
      Name: customerModel.custName,
      Address: customerModel.address,
      Contact: customerModel.Mobile,
      orderId: customerModel.orderId ? customerModel.orderId : null
    }
    const url = `http://localhost:3000/Customer`;
    return this.http.post(url, data).pipe(map(x => x));
  }
  deleteCustomer = (id) => {
    const url = `http://localhost:3000/Customer/${id}`;
    return this.http.delete(url).pipe(map(x => x));
  }

}
