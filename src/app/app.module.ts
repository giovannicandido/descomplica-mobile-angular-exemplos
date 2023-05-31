import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiComponent } from './components/pai/pai.component';
import { FilhoComponent } from './components/filho/filho.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { ItemAddComponent } from './components/item-add/item-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatePickerComponent } from './components/avancados/datepicker.componet';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { ModalComponent } from './components/avancados/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from './components/avancados/dialog-overview-example-dialog.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/avancados/table.component';
import { TableOrderComponent } from './components/avancados/table-order.component';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    FilhoComponent,
    ItemAddComponent,
    ItemListComponent,
    DatePickerComponent,
    ModalComponent,
    DialogOverviewExampleDialog,
    TableComponent,
    TableOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
