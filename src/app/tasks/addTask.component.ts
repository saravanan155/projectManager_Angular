import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IProject } from '../projects/project';
import { ITask } from './task';
import { TaskService } from './task.service';
import { ProjectService } from '../projects/project.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../users/user.service';
import { IUser } from '../users/user';
import { ParentService } from './parent.service';
import { IParent } from './parent';
import { Router } from '@angular/router';

@Component({
  selector: 'add-task',
  templateUrl: './addTask.component.html',
  })
export class addTaskComponent {
  
  //screen variables
  project : IProject;
  taskName: string;
  isParent: boolean = false;
  priority: number;
  parent  : IParent;
  startDate: string;
  endDate: string;
  user : IUser;
  // end of screen variables declaration

  submitbtn: string = "Add Task";
  selectedProject: number;
  selectedParentId: number;
  selectedProjectId: number;
  projectName: string;
  parentName: string;
  users : IUser []=[];
  projects: IProject [] = [];
  parents: IParent [] = [];
  tasks: ITask [] = [];
  task: ITask;
  selectedUserId : number;
  userName: string;

  constructor (private cd: ChangeDetectorRef, private taskService : TaskService, private router: Router, private userService : UserService, private projectService : ProjectService, private parentService : ParentService, private modalService: NgbModal) {
    
  }

  errorMessage : string;

  onReset(){
    this.submitbtn= "Add";    
    this.project=null;
    this.taskName='';
    this.isParent=false;
    this.priority=0;
    this.parent=null;
    this.startDate=""; 
    this.endDate=""; 
    this.user=null;
  }

  ngOnInit() :void {
          this.projectService.getProjects().subscribe(projects => this.projects=projects);

          this.parentService.getParents().subscribe(parents => this.parents=parents);

          this.userService.getUsers().subscribe(users => this.users=users);
  }

  openSubModel(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      if (this.projects.filter(project  => project.projectId == this.project.projectId).length === 0) {
        this.selectedProjectId=0;
        this.projectName='';
        this.project=null;
      }
    });
  }

  selectProject() {
    if (!this.selectedProjectId) {
      if (this.projects.filter(project => project.projectId == this.project.projectId).length === 0) {
        this.selectedProjectId=0;
        this.projectName='';
        this.project=null;
      }
    } else {
      this.project = this.projects.filter(project => project.projectId == this.selectedProjectId)[0];
      this.projectName= this.project.projectName
      this.errorMessage = undefined;
    }
    this.modalService.dismissAll();
  }

  openSubModelParent(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      if (this.parents.filter(parent  => parent.parentId == this.parent.parentId).length === 0) {
        this.selectedParentId=0;
        this.parentName='';
        this.parent=null;
      }
    });
  }

  selectParent() {
    if (!this.selectedParentId) {
      if (this.parents.filter(parent => parent.parentId == this.parent.parentId).length === 0) {
        this.selectedParentId=0;
        this.parentName='';
        this.parent=null;
      }
    } else {
      this.parent = this.parents.filter(parent => parent.parentId == this.selectedParentId)[0];
      this.parentName= this.parent.parentName
      this.errorMessage = undefined;
    }
    this.modalService.dismissAll();
  }

  openSubModelUser(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      if (this.users.filter(user => user.userId == this.user.userId).length === 0) {
        this.user.userId = undefined;
        this.user.firstName = undefined;
        this.user.lastName = undefined;
        this.user.employeeId = undefined;
      }
    });
  }

  selectUser() {
    if (!this.  selectedUserId) {
      if (this.users.filter(user => user.userId == this.user.userId).length === 0) {
        this.user.userId = undefined;
        this.user.firstName = undefined;
        this.user.lastName = undefined;
        this.user.employeeId = undefined;
      }
    } else {
      this.user = this.users.filter(user => user.userId == this.selectedUserId)[0];
      this.errorMessage = undefined;
    }
    this.userName = this.user.firstName + ' , ' + this.user.lastName;
    this.modalService.dismissAll();
  }

  parentTaskEvent(event) {
    this.isParent = !!event.target.checked;
  }

onSubmit(){

    console.log('inside onsubmit'+this.isParent);

     if(this.isParent ){
        var data= {
        "parentId": 0,
        "parentName":this.taskName
        }
     
        this.parentService.addParent(data).subscribe(
          save => {
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/addtask'])); 
          });
        }

  }
}
