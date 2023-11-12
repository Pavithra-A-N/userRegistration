import { Component } from '@angular/core';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss']
})
export class SuccessScreenComponent {
  paymentId = "ID : "+localStorage.getItem('paymentId')?.slice(0,15)+"...."
}
