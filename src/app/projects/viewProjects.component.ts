import { Component, Input, Output } from '@angular/core';
import { IProject } from './project';
import { ProjectService } from './project.service';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { isBuffer } from 'util';
import { EventEmitter } from '@angular/core';
import { UserService } from '../users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'view-projects',
  templateUrl: './viewProjects.component.html'
  })
export class viewProjectsComponent { 

  _searchProject = '';
  projectsFiltered: IProject[];
  errorMessage = '';
  sorted: boolean = false;

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

  constructor (private projectService : ProjectService, private userService: UserService, private router: Router) {
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

  //deleteProject1 (projectId: number): void{
  //    this.projectService.delProject(projectId).subscribe(
  //()=>{console.log('delete successfully'),
  //this.deleteProjectFiltered(projectId)
  //},
  //(err) => console.log(err)
  //);
  //}

  deleteProject (project: IProject): void{
    project.projectStatus=false;
    this.projectService.addProject(project).subscribe(
    save => {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigate(['/addproject'])); 
    });
  }

  sortByCompleted(){
    if(this.sorted)
      this.projectsFiltered.sort((a,b) => {return <any> new Boolean(a.projectStatus) - <any> new Boolean(b.projectStatus)} );
    else
      this.projectsFiltered.sort((a,b) => {return <any> new Boolean(b.projectStatus) - <any> new Boolean(a.projectStatus)} );
    this.sorted = !this.sorted;
  }

sortByPriority(){
  if(this.sorted)
    this.projectsFiltered.sort((a,b) => a.priority - b.priority);
  else
    this.projectsFiltered.sort((a,b) => b.priority - a.priority);
  this.sorted = !this.sorted;
}

sortByStartDate(){
  if(this.sorted)
    this.projectsFiltered.sort((a,b) => { return <any> new Date(a.startDate) - <any> new Date(b.startDate)} );
  else
  this.projectsFiltered.sort((a,b) => { return <any> new Date(b.startDate) - <any> new Date(a.startDate)} );
  
  this.sorted = !this.sorted;
}

sortByEndDate(){
  if(this.sorted)
    this.projectsFiltered.sort((a,b) => { return <any> new Date(a.endDate) - <any> new Date(b.endDate)} );
  else
  this.projectsFiltered.sort((a,b) => { return <any> new Date(b.endDate) - <any> new Date(a.endDate)} );
  
  this.sorted = !this.sorted;
}

}