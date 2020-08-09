import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BreadcrumpsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    BreadcrumpsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
