import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardComponent } from '../components/shared/item-card/item-card.component';
import { ItemGridViewComponent } from '../components/item-grid-view/item-grid-view.component';
import { AddItemComponent } from '../components/add-item/add-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule, MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';
const route:Routes = [
  {
    path:'',
    component:ItemGridViewComponent
  },
  {
    path:'add-item',
    component:AddItemComponent
  },
  {
    path:'item-card',
    component:ItemCardComponent
  }
]

@NgModule({
  declarations: [
    ItemCardComponent,
    ItemGridViewComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPseudoCheckboxModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCommonModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatRadioModule,
    FlexLayoutModule,

    RouterModule.forChild(route)
  ],
  exports:[
    ItemCardComponent
  ]
})
export class InvetoryModule { }
