import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsListComponent } from './transactions-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AmountDividePipeModule, TypeLabelPipeModule } from '../../pipes';
import { MatButtonModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { TransactionRowComponent } from './transaction-row';

@NgModule({
  declarations: [TransactionsListComponent, TransactionRowComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AmountDividePipeModule,
    TypeLabelPipeModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [TransactionsListComponent]
})
export class TransactionsListModule {}