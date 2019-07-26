import { Component, Input, Output } from '@angular/core';
import { IUser } from './user';
import { UserService } from './user.service';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { isBuffer } from 'util';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'view-users',
  templateUrl: './viewUsers.component.html',
  })
export class ViewUsersComponent {
  _searchFirstName = '';
  usersFiltered: IUser[];
  errorMessage = '';
  sorted : boolean = false;

  @Output() notify: EventEmitter<IUser> = new EventEmitter<IUser>();

  onClick(user: IUser){
        this.notify.emit(user);
  }

  public get searchFirstName() {
    return this._searchFirstName;
  }
  public set searchFirstName(value) {
    this._searchFirstName = value;
    this.usersFiltered=this.searchFirstName ? this.performFilter(this.searchFirstName) : this.users;
  }
  
constructor (private userService : UserService) {
  this.searchFirstName ='search firstname';
}

  users: IUser [] = [];

  performFilter(searchFirstName: string) : IUser[]{
    searchFirstName = searchFirstName.toLocaleLowerCase();
    return this.users.filter((user: IUser) => user.firstName.toLocaleLowerCase().indexOf(searchFirstName)!== -1);
  }

  ngOnInit() :void {
    this.userService.getUsers().subscribe(
      users=> {this.users = users; 
               this.usersFiltered=this.users;
              },
      error => this.errorMessage = <any>error);
  }

  private userToBeUpdate:IUser ;
  editUser(user: IUser): void{
    this.userToBeUpdate = user;
    console.log(this.userToBeUpdate);
  }

  deleteUserFiltered = (id: number): void => {
        this.usersFiltered = this.usersFiltered.filter(user => user.userId !== id);        
    }

  deleteUser (id: number): void{
    this.userService.delUser(id).subscribe(
      ()=>{console.log('delete successfully'),
           this.deleteUserFiltered(id)
           },
      (err) => console.log(err)
    );
  }

  sortByFirstName(){
    if(this.sorted)
      this.usersFiltered.sort((a,b) => a.firstName.localeCompare(b.firstName));
    else
      this.usersFiltered.sort((a,b) => b.firstName.localeCompare(a.firstName));
    
    this.sorted = !this.sorted;
  }

  sortByLastName(){
    if(this.sorted)
      this.usersFiltered.sort((a,b) => a.lastName.localeCompare(b.lastName));
    else
      this.usersFiltered.sort((a,b) => b.lastName.localeCompare(a.lastName));
    
    this.sorted = !this.sorted;
  }

sortByEmployeeId(){
  if(this.sorted)
  this.usersFiltered.sort((a,b) => a.employeeId - b.employeeId);
else
  this.usersFiltered.sort((a,b) => b.employeeId - a.employeeId);

this.sorted = !this.sorted;
}
}