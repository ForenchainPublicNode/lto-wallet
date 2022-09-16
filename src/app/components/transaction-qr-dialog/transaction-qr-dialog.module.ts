import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionQrDialogComponent } from './transaction-qr-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TransactionQrDialog } from './transaction-qr.dialog';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [TransactionQrDialogComponent],
  entryComponents: [TransactionQrDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, FlexLayoutModule, QRCodeModule],
  providers: [TransactionQrDialog],
})
export class TransactionQrDialogModule {}
