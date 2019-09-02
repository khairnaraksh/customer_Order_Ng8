import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './Customer-routing.module';
import { CustomerComponent } from './customer.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { InformationComponent } from './information/information.component';
import { CustorderDetailsComponent } from './custorder-details/custorder-details.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CustomerRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    declarations: [CustomerComponent, InformationComponent, CustorderDetailsComponent],
    exports: []
})
export class CustomerModule { }