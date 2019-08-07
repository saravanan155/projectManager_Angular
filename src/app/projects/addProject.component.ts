import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ProjectService } from './project.service';
import { IProject } from './project';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { viewProjectsComponent } from './viewProjects.component';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { IUser } from '../users/user';
import { UserService } from '../users/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'add-project',
  templateUrl: './addProject.component.html',
  })

export class addProjectComponent {
  
  constructor (private projectService : ProjectService, private router: Router, private datePipe: DatePipe, private userService : UserService, private modalService: NgbModal) {
    this.todayDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  managers :IUser[] = [];
  manager :IUser = new IUser();
  selectedManagerId: number;
  managerName: string;
  user: IUser = new IUser();
  projectName: string;
  startDate: string;
  endDate: string;
  priority: number=0;
  projectStatus: boolean = true;
  projectId: number;
  submitbtn: string = "Add";
  project : IProject;
  projectAdded: IProject;
  errorMessage = '';
  todayDate: string;
  setDate: boolean= false;

  onReset(){
    this.submitbtn= "Add";    
    this.projectName="";
    this.priority=0;
    this.projectStatus=true;
    this.projectId=0;
    this.manager=null;
    this.managerName = "";
    this.startDate=""; 
    this.endDate=""; 
  }

  ngOnInit() :void {
      this.userService.getManagers().subscribe(managers => this.managers=managers);
  }
  
  isDateSet(event){
    this.setDate= !!event.target.checked;
  }

  onNotify(projectAdded: IProject): void{
    console.log(projectAdded);
    
    this.projectName =projectAdded.projectName;
    this.priority =projectAdded.priority;
    this.projectStatus=projectAdded.projectStatus;
    this.projectId=projectAdded.projectId;
    this.manager=projectAdded.user;
    this.managerName = this.manager.employeeId + ' - ' + this.manager.firstName + ' , ' + this.manager.lastName;
    this.startDate=this.datePipe.transform(projectAdded.startDate,'yyyy-MM-dd'); 
    this.endDate=this.datePipe.transform(projectAdded.endDate,'yyyy-MM-dd'); 
    this.submitbtn = "Update";
  }

  onSubmit(){
      
      this.startDate += 'T04:00:00.000+0000';
      this.endDate += 'T04:00:00.000+0000';

      var data= {
        "projectName": this.projectName,
        "startDate":this.startDate,
        "endDate": this.endDate,
        "priority": this.priority,
        "projectId": this.projectId,
        "projectStatus":this.projectStatus,
        "user":this.manager,
        "taskCount":0
        }
     
        console.log("data before insert project:" + data);
        this.projectService.addProject(data).subscribe(
          save => {
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/addproject'])); 
          }
        );
    }

    openSubModel(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      }, (reason) => {
        if (this.managers.filter(user => user.userId == this.manager.userId).length === 0) {
          this.manager.userId = undefined;
          this.manager.firstName = undefined;
          this.manager.lastName = undefined;
          this.manager.employeeId = undefined;
        }
      });
    }
  
    selectManager() {
      if (!this.selectedManagerId) {
        if (this.managers.filter(user => user.userId == this.manager.userId).length === 0) {
          this.manager.userId = undefined;
          this.manager.firstName = undefined;
          this.manager.lastName = undefined;
          this.manager.employeeId = undefined;
        }
      } else {
        this.manager = this.managers.filter(user => user.userId == this.selectedManagerId)[0];
        this.errorMessage = undefined;
      }
      this.managerName = this.manager.employeeId + ' - ' + this.manager.firstName + ' , ' + this.manager.lastName;
      this.modalService.dismissAll();
    }

}
