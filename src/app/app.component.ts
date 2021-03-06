import { RequestObject } from './interface/reqestObject';
import { Iinfo } from './interface/info.model';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SendMailServiceService } from './services/send-mail-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  public subscription: Subscription;
  constructor(private sendmailservice: SendMailServiceService) { }

  mailForm = new Iinfo();
  quotationRequestObject = new RequestObject();


  sendMail() {
    this.subscription = this.sendmailservice.sendEmail(this.mailForm).
    subscribe(data => {
      const msg = data.message;
      alert(msg);
    }, error => {
      console.error(error, 'error');
    } );
  }

  sendQuotationRequest(){
    this.subscription = this.sendmailservice.sendQuotationRequest(this.quotationRequestObject).
    subscribe(data => {
      const msg = data.message;
      alert(msg);
    }, error => {
      console.error(error, 'error');
    } );
  }
  }

