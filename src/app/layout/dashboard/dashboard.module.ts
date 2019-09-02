import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
    imports: [
        DashboardRoutingModule,
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [DashboardComponent],
    exports: []
})
export class DashboardModule { }