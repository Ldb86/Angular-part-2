import { IUser } from './../../user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {
  
  user?: IUser;

  constructor() { }

  ngOnInit(): void {
  }

  showUser(user: IUser):void {
    this.user = user;
  }
  
  closeDetails(): void {
    this.user = undefined;
  }

}
