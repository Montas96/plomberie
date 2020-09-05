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


  sendMail() {
    console.log(this.mailForm);
    this.subscription = this.sendmailservice.sendEmail(this.mailForm).
    subscribe(data => {
      const msg = data.message;
      alert(msg);
    }, error => {
      console.error(error, 'error');
    } );
  }
  }

