import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, PagesRoutingModule, ComponentsModule],
})
export class PagesModule {}
