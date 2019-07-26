import { Component } from '@angular/core';
import { ITask } from './task';
import { IProject } from '../projects/project';
import { IUser } from '../users/user';
import { TaskService } from './task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from '../projects/project.service';

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

  projects: IProject [] = [];
  tasks: ITask [] = [];

  constructor (private taskService : TaskService, private projectService : ProjectService, private modalService: NgbModal) {
    
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
  
}
