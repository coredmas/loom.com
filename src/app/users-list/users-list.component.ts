import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList = [];
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
  }

  search(query: string): void{
    this.usersList = this.usersService.findUser(query);
  }

  sort(sortType: string): void{
    console.log(sortType);
    this.usersList = this.usersService.sortUser(sortType);
  }

}
