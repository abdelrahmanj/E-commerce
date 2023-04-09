import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './component/select/select.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    FooterComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    SelectComponent,
    RouterModule,
    SpinnerComponent

  ]
})
export class SharedModule { }
