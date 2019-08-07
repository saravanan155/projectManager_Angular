import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTaskComponent } from './tasks/viewTask.component';
import { ViewUsersComponent } from './users/viewUsers.component';
import { addUserComponent } from './users/addUser.component';
import { addProjectComponent } from './projects/addProject.component';
import { viewProjectsComponent } from './projects/viewProjects.component';
import { addTaskComponent } from './tasks/addTask.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pageNotFound.component';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, ViewTaskComponent, ViewUsersComponent, addUserComponent, addProjectComponent, viewProjectsComponent, addTaskComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'addproject', component: addProjectComponent},
      {path: 'addtask/:taskId', component: addTaskComponent},
      {path: 'adduser', component: addUserComponent},
      {path: 'viewtask', component: ViewTaskComponent},
      {path: '', redirectTo:'viewtask',pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ], 
    {onSameUrlNavigation: 'reload'}),
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
