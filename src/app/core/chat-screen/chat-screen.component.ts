import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(1000, style({opacity: 1}))
      ]) 
    ])
  ]
})
export class ChatScreenComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }


  public intercomText: any[] = [
    {
      "id": "0001",
      "mode": "income",
      "direction": "left",
      "message": " Glad to see you're checking out the app store <br> <br> Can I help you out with anything?",
    },
    {
      "id": "0002",
      "mode": "outcome",
      "direction": "end",
      "message": "I'm Interested in trying Intercom",
    },
    {
      "id": "0003",
      "mode": "outcome",
      "direction": "end",
      "message": "I'm a customer with a question",
    },
    {
      "id": "0004",
      "mode": "outcome",
      "direction": "end",
      "message": "I'm good, Thanks",
    },
    {
      "id": "0005",
      "mode": "income",
      "direction": "left",
      "message": "Let's schedule a demo meeting to Botify your business routines like lead generation, customer support, product promotion and so on",
    },
  ]

  getMessage(type: string) {
    return this.intercomText.filter(x => x.mode === type)
  }

  homescreen() {
    this._router.navigate(["homescreen"]);
  }
}
