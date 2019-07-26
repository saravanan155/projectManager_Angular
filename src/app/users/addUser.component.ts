import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './user';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ViewUsersComponent } from './viewUsers.component';
import { Router } from '@angular/router';

@Component({
  selector: 'add-user',
  templateUrl: './addUser.component.html',
  })
export class addUserComponent {
  
  constructor (private userService : UserService, private router: Router, private cd: ChangeDetectorRef) {
  }

  firstName: string;
  lastName: string;
  employeeId: number;
  userId: number=0;
  mgrInd: boolean= false;
  submitbtn: string = "Add";

  user : IUser = new IUser();
  userAdded: IUser;

  onReset(){
    this.firstName="";
    this.lastName="";
    this.employeeId=null;
    this.userId=0;
    this.mgrInd=false;
    this.submitbtn = "Add";    
  }

  onNotify(userAdded: IUser): void{
        console.log('inside add component');
        console.log(userAdded);
        this.firstName=userAdded.firstName;
        this.lastName=userAdded.lastName
        this.employeeId=userAdded.employeeId;
        this.userId=userAdded.userId;
        this.mgrInd=userAdded.mgrInd;
        this.submitbtn = "Update";
  }

  onSubmit(){

      var data= {
        "firstName": this.firstName,
        "lastName":this.lastName,
        "employeeId": this.employeeId,
        "userId": this.userId,
        "mgrInd":this.mgrInd
        }
        console.log(data);
        this.userService.addUser(data).subscribe(
          save => {
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/adduser'])); 
          }
        );

    }

}
