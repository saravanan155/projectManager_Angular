import { Component } from '@angular/core';
import { ITask } from './task';
import { IProject } from '../projects/project';
import { IUser } from '../users/user';
import { TaskService } from './task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../projects/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-task',
  templateUrl: './viewTask.component.html',
  })
export class ViewTaskComponent {
  
  project : IProject;
  tasksFiltered: ITask[]=[];
  selectedProject: number;
  selectedProjectId: number;
  projectName: string;
  sorted : boolean = false;
  projects: IProject [] = [];
  tasks: ITask [] = [];

  constructor (private taskService : TaskService, private projectService : ProjectService, private modalService: NgbModal, private router: Router) {
    
  }

  errorMessage : string;
    
  ngOnInit() :void {
    this.taskService.getTasks().subscribe(
      tasks=> {this.tasks = tasks; 
              this.tasksFiltered=this.tasks;
              },
      error => this.errorMessage = <any>error);

      this.projectService.getProjects().subscribe(projects => this.projects=projects);
  }

  private taskToBeUpdate:ITask ;
  editproject(task: ITask): void{
    this.taskToBeUpdate = task;
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
      this.tasksFiltered=this.tasks.filter((task: ITask) => task.project.projectId == this.selectedProjectId);
      this.errorMessage = undefined;
    }
    this.modalService.dismissAll();
  }
  
  editTask(taskId) {
    //console.log("task : " + taskId);
    this.router.navigate(['/addtask',taskId])
  }

  endTask(task){
        task.taskStatus=false;
        this.taskService.addTask(task).subscribe(
          save => {
            this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
              this.router.navigate(['/viewtask'])); 
          });
  }

  sortByCompleted(){
    if(this.sorted)
      this.tasksFiltered.sort((a,b) => {return <any> new Boolean(a.taskStatus) - <any> new Boolean(b.taskStatus)} );
    else
      this.tasksFiltered.sort((a,b) => {return <any> new Boolean(b.taskStatus) - <any> new Boolean(a.taskStatus)} );
    this.sorted = !this.sorted;
  }

sortByPriority(){
  if(this.sorted)
    this.tasksFiltered.sort((a,b) => a.priority - b.priority);
  else
    this.tasksFiltered.sort((a,b) => b.priority - a.priority);
  this.sorted = !this.sorted;
}

sortByStartDate(){
  if(this.sorted)
    this.tasksFiltered.sort((a,b) => { return <any> new Date(a.startDate) - <any> new Date(b.startDate)} );
  else
  this.tasksFiltered.sort((a,b) => { return <any> new Date(b.startDate) - <any> new Date(a.startDate)} );
  
  this.sorted = !this.sorted;
}

sortByEndDate(){
  if(this.sorted)
    this.tasksFiltered.sort((a,b) => { return <any> new Date(a.endDate) - <any> new Date(b.endDate)} );
  else
  this.tasksFiltered.sort((a,b) => { return <any> new Date(b.endDate) - <any> new Date(a.endDate)} );
  
  this.sorted = !this.sorted;
}
}
