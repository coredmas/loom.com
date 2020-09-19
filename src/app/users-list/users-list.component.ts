import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../shared/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[];
  username: string;
  name: string;
  role: string;
  selectedUsers: User[];
  constructor(public usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getUsersList();
    // setTimeout(() => {
    //   this.username = 'Axel Zi';
    //   }, 2000);
  }

  search(query: string): void{
    this.usersList = this.usersService.findUser(query);
  }

  sort(sortType: string): void{
    console.log(sortType);
    this.usersList = this.usersService.sortUser(sortType);
  }
  AddUser(): void{
    this.usersService.addUser({
      id: Math.floor(Math.random() * 100),
      username: this.username,
      name: this.name,
      role: this.role,
      email: '',
      phone: '',
      website: ''
    });
  }
  selectItem(users: any[]){
    this.selectedUsers = [];
    users.forEach(
      element => {
      this.selectedUsers.push(element.value);
      console.log(element.value);
      });
  }
  DeleteUser(): void{
    this.usersService.deleteUsers(this.selectedUsers);
    this.usersList = this.usersService.getUsersList();
  }

}
