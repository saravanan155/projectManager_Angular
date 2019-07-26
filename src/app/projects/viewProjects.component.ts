import { Component, Input, Output } from '@angular/core';
import { IProject } from './project';
import { ProjectService } from './project.service';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { isBuffer } from 'util';
import { EventEmitter } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  selector: 'view-projects',
  templateUrl: './viewProjects.component.html'
  })
export class viewProjectsComponent { 

  _searchProject = '';
  projectsFiltered: IProject[];
  errorMessage = '';

  @Output() notify: EventEmitter<IProject> = new EventEmitter<IProject>();
  
  onClick(project: IProject){
        this.notify.emit(project);
  }

  public get searchProject() {
    return this._searchProject;
  }
  public set searchProject(value) {
    this._searchProject = value;
    this.projectsFiltered=this.searchProject ? this.performFilter(this.searchProject) : this.projects;
  }

  constructor (private projectService : ProjectService, private userService: UserService) {
    this.searchProject ='';
  }
  
  projects: IProject [] = [];

  performFilter(searchProject: string) : IProject[]{
    searchProject = searchProject.toLocaleLowerCase();
    return this.projects.filter((project: IProject) => project.projectName.toLocaleLowerCase().indexOf(searchProject)!== -1);
  }

  ngOnInit() :void {
    this.projectService.getProjects().subscribe(
      projects=> {this.projects = projects; 
              this.projectsFiltered=this.projects;
              },
      error => this.errorMessage = <any>error);
      console.log(this.projectsFiltered);
  }

  private projectToBeUpdate:IProject ;
  editproject(project: IProject): void{
    this.projectToBeUpdate = project;
    console.log(this.projectToBeUpdate);
  }

  deleteProjectFiltered = (projectId: number): void => {
        this.projectsFiltered = this.projectsFiltered.filter(project => project.projectId !== projectId);        
    }

  deleteProject (projectId: number): void{
    this.projectService.delProject(projectId).subscribe(
      ()=>{console.log('delete successfully'),
           this.deleteProjectFiltered(projectId)
           },
      (err) => console.log(err)
    );
  }
}