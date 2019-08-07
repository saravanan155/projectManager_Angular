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
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'add-task',
  templateUrl: './addTask.component.html',
  })
export class addTaskComponent implements OnInit {
  
  //screen variables
  project : IProject;
  taskId: number = 0;
  taskName: string;
  isParent: boolean = false;
  taskStatus: boolean = true;
  priority: number = 0;
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

  constructor ( private route: ActivatedRoute, 
                private cd: ChangeDetectorRef, 
                private taskService : TaskService, 
                private router: Router, 
                private userService : UserService, 
                private projectService : ProjectService, 
                private parentService : ParentService, 
                private modalService: NgbModal,
                private datePipe: DatePipe) {
    
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

  ngOnInit() {

    const taskId = this.route.snapshot.paramMap.get('taskId');

    if(!(taskId == null) && !(taskId == '0')){
      this.taskService.getTasks().subscribe(
        tasks => {
          this.task = tasks.filter(task => task.taskId.toLocaleString() == taskId)[0];
          this.submitbtn= "Update";    
          this.project=this.task.project;
          this.taskId=this.task.taskId;
          this.taskName=this.task.taskName;
          this.isParent=false;
          this.priority=this.task.priority;
          this.parent=this.task.parent;
          this.startDate=this.datePipe.transform(this.task.startDate,'yyyy-MM-dd'); 
          this.endDate=this.datePipe.transform(this.task.endDate,'yyyy-MM-dd'); 
          this.datePipe.transform(this.endDate,'yyyy-MM-dd');           
          this.user=this.task.user;
          this.projectName = this.task.project.projectName;
          this.parentName = this.task.parent.parentName;
          this.userName = this.task.user.firstName + ' , ' + this.task.user.lastName;
        },
        error => this.errorMessage = <any>error
      );
    }
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
  selectUser() {
    if (!this.selectedUserId) {
      if (this.users.filter(user => user.userId == this.user.userId).length === 0) {
        this.selectedUserId=0;
        this.userName='';
        this.user=null;
      }
    } else {
      this.user = this.users.filter(user => user.userId == this.selectedUserId)[0];
      this.userName= this.user.firstName+' , '+this.user.lastName;
      this.errorMessage = undefined;
    }
    this.modalService.dismissAll();
  }

  openSubModelUser(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
      if (this.users.filter(user => user.userId == this.user.userId).length === 0) {
        this.selectedUserId=0;
        this.user.userId = undefined;
        this.user.firstName = undefined;
        this.user.lastName = undefined;
        this.user.employeeId = undefined;
      }
    });
  }

  parentTaskEvent(event) {
    this.isParent = !!event.target.checked;
  }

onSubmit(){

    //console.log('inside onsubmit'+this.isParent);

     if(this.isParent ){
        var data= {
        "parentId": 0,
        "parentName":this.taskName
        }
      
        this.parentService.addParent(data).subscribe(
          save => {
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/addtask/0'])); 
          });
        } else {
          this.startDate += 'T04:00:00.000+0000';
          this.endDate += 'T04:00:00.000+0000';
          
          var dataTask= {
            "taskId":this.taskId,
            "taskName": this.taskName,
            "priority":this.priority,
            "startDate":this.startDate,
            "endDate":this.endDate,
            "taskStatus":this.taskStatus,
            "user":this.user,
            "parent":this.parent,
            "project":this.project
            }
            
            this.taskService.addTask(dataTask).subscribe(
              save => {
                this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
                  this.router.navigate(['/addtask/0'])); 
              });
        }

  }
}
