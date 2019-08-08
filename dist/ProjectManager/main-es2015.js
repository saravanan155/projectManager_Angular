(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!doctype html>\n<html lang=\"en\">\n  <head>\n    <!-- Required meta tags -->\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n    <!-- Bootstrap CSS -->\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n    <title>Project Manager</title>\n    <style>\n        .col{\n            margin: 10px 10px;\n            color: white;\n        }\n    </style>\n  </head>\n  <body>\n    <br>\n    <br>    \n    <h1 class=text-center>Project Manager</h1>\n    <br>\n    <div class=\"container\">\n       <div class=\"row align-items-center\">\n           <div class=\"col btn btn-primary\" type=\"button\"><div [routerLink]=\"['/addproject']\">Add Project</div></div>\n           <div class=\"col btn btn-primary\" type=\"button\"><div [routerLink]=\"['/addtask/0']\">Add Task</div></div>\n           <div class=\"col btn btn-primary\" type=\"button\"><div [routerLink]=\"['/adduser']\">Add User</div></div>\n           <div class=\"col btn btn-primary\" type=\"button\"><div [routerLink]=\"['/viewtask']\">View Task</div></div>                                 \n        </div>        \n    </div>\n\n<br>\n\n<div >\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/addProject.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/addProject.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <title>Project Manager</title>\r\n    <style>\r\n        input {\r\n         height: 20px;\r\n         width: 300px;\r\n         border: 1px solid #000;\r\n         margin-top: 10px;\r\n         float: left;\r\n        }\r\n        \r\n        label {\r\n            text-align:match-parent;\r\n        }\r\n        .mydiv {\r\n            margin: 1px 1px;\r\n        }\r\n        .col-1{\r\n            margin: 1px 1px;\r\n            padding: 5px;\r\n        }\r\n        .mylabel{\r\n            width: 200px;\r\n        }\r\n        .mycheckbox{\r\n            margin: 1px 10px;\r\n            width: 30px;\r\n        }\r\n        .mydate{\r\n            margin: 1px 10px;\r\n            width: 150px;\r\n        }\r\n        .rightaligndiv{\r\n            align-content: center;\r\n        }\r\n        \r\n        .btn-space{\r\n           margin-right: 10px\r\n        }\r\n    </style>\r\n  </head>\r\n  <body>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n           <div class=container>\r\n            \r\n             <div class=\"row form-group\">\r\n                 <div class=\"col-1\">\r\n                      <label for=\"prj\">Project :</label>\r\n                 </div>\r\n                <div class=\"col\">\r\n                     <input class=\"col\" type=\"text\" id=\"projectName\" name=\"projectName\" [(ngModel)]=\"projectName\" >\r\n                 </div>\r\n            </div>\r\n            \r\n            <div class=\"row mydiv\">\r\n                    <div class=\"col-1\"></div>\r\n                    <div class=\"col\">\r\n                       <div class=\"row\">\r\n                        <label for=\"setdt\">Set Start and End Date</label>\r\n                        <input class=\"mycheckbox\" type=\"checkbox\"  [checked]=\"setDate\" id=\"setDate\" name=\"setDate\" value=\"\" [(ngModel)]=\"setDate\" (change)=\"isDateSet($event)\">\r\n                        <label for=\"stdt\">Start Date :</label>\r\n                        <input class=\"mydate\" min=\"{{ todayDate }}\" max=\"{{endDate}}\" type=\"date\" id=\"stdt\" name=\"startDate\" [(ngModel)]=\"startDate\" [disabled]=!setDate>  \r\n                        <label for=\"eddt\">End Date :</label>\r\n                        <input class=\"mydate\" min=\"{{ startDate }}\" type=\"date\" id=\"eddt\" name=\"endDate\" [(ngModel)]=\"endDate\" [disabled]=!setDate>\r\n                    </div>\r\n                    </div>\r\n            </div>\r\n            \r\n\r\n            <div class=\"row form-group\">\r\n               <div class=\"col-1\">\r\n                <label for=\"pri\">Priority :</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                <input type=\"range\" min=\"0\" max=\"30\"name=\"priority\" [(ngModel)]=\"priority\">\r\n                <div>{{priority}}</div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row  form-group\">\r\n                <div class=\"col-1\">\r\n                  <label for=\"mgr\">Manager :</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <div>\r\n                        <input  class=\"col\" type=\"text\" placeholder=\"Select Manager\" [disabled]=\"true\" required\r\n                              value=\"{{managerName}}\" autocomplete=\"off\">\r\n                        <div >\r\n                            <button type=\"button\" (click)=\"openSubModel(content)\" class=\"btn btn-primary btn-space\"> Search </button>\r\n                        </div>\r\n                    </div>    \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mydiv form-group\">\r\n               <div class=\"col-1\"></div>\r\n               <div class=\"col\">\r\n                <div class=\"row\">\r\n                    <button class=\"col-1 btn btn-primary\" type=\"submit\">{{submitbtn}}</button>\r\n                    <button class=\"col-1 btn btn-primary\" type=\"reset\" (click)=\"onReset()\">Reset</button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n           </div>\r\n           <div>\r\n            <view-projects (notify)='onNotify($event)'></view-projects>\r\n           </div>\r\n    </form>\r\n    \r\n    <ng-template #content let-modal>\r\n        <div class=\"double\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\" style=\"text-align: center\"> Select Manager for Project </h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <div class=\"form-group form-inline\">\r\n                <label class=\"modelLabel btn-space\"> Manager </label>\r\n                <select class=\"form-control selectInput\" id=\"selectedManagerId\" name=\"selectedManagerId\" [(ngModel)]=\"selectedManagerId\">\r\n                  <option *ngFor=\"let manager of managers\" value=\"{{manager.userId}}\">\r\n                    {{ manager.employeeId }} - {{ manager.firstName }} , {{ manager.lastName }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <button id=\"selectManager\" class=\"btn btn-primary btn-space\" (click)=\"selectManager()\">Select</button>\r\n              <button id=\"cancelButton\" class=\"btn btn-primary btn-space\" (click)=\"modal.dismiss()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/viewProjects.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/viewProjects.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <title>Project Manager</title>\r\n    <style>\r\n        .btn{\r\n            height: 35px;\r\n            padding: 5px;\r\n        }\r\n        .row{\r\n            margin: 15px 15px;\r\n            padding: 7px;\r\n        }\r\n        label{\r\n            text-align: left;\r\n        }\r\n        .searchbar{\r\n            width:inherit\r\n        }\r\n        #btnCol{\r\n            height:35px;\r\n            width: 75px;\r\n            margin: 5px;\r\n            padding: 5px;\r\n        }\r\n        .list-group{\r\n            margin:0px;\r\n            padding: 1px;\r\n            border: none;\r\n            background: #dddddd;\r\n                    }\r\n        .list-group-item{\r\n            padding: 1px;\r\n            border: none;\r\n            background: #dddddd;\r\n        }\r\n        .dispPrjCol.col-1{\r\n            background: #dddddd;\r\n        }\r\n        .dispPrjCol.col-2{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content:center;\r\n        }\r\n            \r\n        .dispPrjRow{\r\n            margin:0px;\r\n        }\r\n                \r\n    </style>\r\n  </head>\r\n  <body>\r\n\r\n   \r\n    <form class=\"srchSort\">\r\n     <div class=\"container\" *ngIf='projectsFiltered && projectsFiltered.length'>\r\n       <div class=\"container\">\r\n           <input class=\"row searchbar\" type=\"text\" placeholder='Search Project Name' [(ngModel)]='searchProject' name=\"Project Name\">\r\n            <div class=\"row\">\r\n               <label class=\"col-1\">Sort By:</label>\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col-1 btn btn-primary\" type=\"button\" (click)='sortByStartDate()'>Start Date</div>\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col-1 btn btn-primary\" type=\"button\" (click)='sortByEndDate()'>End Date</div>\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col-1 btn btn-primary\" type=\"button\" (click)='sortByPriority()'>Priority</div>\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col-1 btn btn-primary\" type=\"button\" (click)='sortByCompleted()'>Completed</div>\r\n           </div>\r\n       </div>\r\n     </div>  \r\n    </form>    \r\n    \r\n    <form class=\"dispPrj\">\r\n        <div class=\"container\" *ngIf='projectsFiltered && projectsFiltered.length'>\r\n            <div class=\"row\" *ngFor='let project of projectsFiltered'>\r\n                <div class=\"dispPrjCol col-9\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"list-group-item\">Project: {{project.projectName}}</li>\r\n                      <div class=\"dispPrjRow row\">\r\n                      <li class=\"col-6 list-group-item\">No of Tasks : {{project.taskCount}}</li>\r\n                      <li class=\"col-6 list-group-item\">Completed : {{project.projectStatus ? 'In-Progress' : 'Closed'}}</li>\r\n                      </div>\r\n                      <div class=\"dispPrjRow row\">\r\n                      <li class=\"col-6 list-group-item\">Start Date :{{project.startDate | date:'MM/dd/yyyy'}}  </li>\r\n                      <li class=\"col-6 list-group-item\">End Date :{{project.endDate  | date:'MM/dd/yyyy'}} </li>\r\n                      </div>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"dispPrjCol col-1\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"row dispPrjRow list-group-item\">Priority: {{project.priority}}</li>\r\n                    </ul>  \r\n                </div>\r\n                <div class=\"dispPrjCol col-2\">\r\n                    <button id=\"btnCol\" class=\"btn btn-primary\" type=\"button\" [disabled]=!project.projectStatus (click)=\"onClick(project)\" >Update</button>\r\n                    <button id=\"btnCol\" class=\"btn btn-primary\" type=\"button\" [disabled]=!project.projectStatus (click)='deleteProject(project)'>Suspend</button>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </form>\r\n    \r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/addTask.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/addTask.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <title>Project Manager</title>\r\n    <style>\r\n        input {\r\n         height: 30;\r\n         width: 300px;\r\n         border: 1px solid #000;\r\n         margin-top: 5px;\r\n         float: left;\r\n        }\r\n        \r\n        label {\r\n            text-align:match-parent;\r\n        }\r\n        .mydiv {\r\n            margin: 1px 1px;\r\n            padding: 1px;\r\n            border:1px;\r\n        }\r\n        .col-1{\r\n            margin: 1px 1px;\r\n            padding: 5px;\r\n        }\r\n        .mylabel{\r\n            width: 200px;\r\n        }\r\n        .mycheckbox{\r\n            width: 30px;\r\n        }\r\n        .mydate{\r\n            margin: 5px 10px;\r\n            width: 150px;\r\n        }\r\n        .rightaligndiv{\r\n            align-content: center;\r\n        }\r\n         .btn-space{\r\n           margin-right: 5px\r\n        }\r\n        .btn-sm{\r\n            width: 150px;\r\n        }\r\n    </style>\r\n  </head>\r\n  <body>\r\n\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n           <div class=container>\r\n            \r\n             <div class=\"row mydiv form-group\">\r\n                 <div class=\"col-1\">\r\n                      <label for=\"prj\">Project :</label>\r\n                 </div>\r\n                <div class=\"col\">\r\n                      <input  class=\"col\" type=\"text\" placeholder=\"Select Project\" [disabled]=\"true\" required\r\n                      value=\"{{projectName}}\" autocomplete=\"off\" >\r\n                      <div >\r\n                          <button type=\"button\" (click)=\"openSubModel(content)\" class=\"btn btn-primary btn-space\" [disabled]=\"isParent\"> Search </button>\r\n                     </div>\r\n                 </div>\r\n            </div>\r\n            <div class=\"row mydiv form-group\">\r\n                 <div class=\"col-1\">\r\n                      <label for=\"prj\">Task :</label>\r\n                 </div>\r\n                <div class=\"col\">\r\n                      <input class=\"col\" type=\"text\" id=\"taskName\" name=\"taskName\" [(ngModel)]=\"taskName\">\r\n                 </div>\r\n            </div>\r\n            \r\n              <div class=\"form-group form-inline\">\r\n                <label>\r\n                  <input type=\"checkbox\" class=\"form-check-input\"\r\n                        id=\"isParent\" [disabled]=\"isEdit\" [checked]=\"isParent\" (change)=\"parentTaskEvent($event)\">\r\n                    Parent Task\r\n                </label>\r\n              </div>\r\n            \r\n            <div class=\"row mydiv  form-group\">\r\n               <div class=\"col-1\">\r\n                <label for=\"pri\">Priority :</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"range\" min=\"0\" max=\"30\"name=\"priority\" [(ngModel)]=\"priority\" [disabled]=\"isParent\">\r\n                  <div>{{priority}}</div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row mydiv  form-group\">\r\n                <div class=\"col-1\">\r\n                  <label for=\"mgr\">Parent task:</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input  class=\"col\" type=\"text\" placeholder=\"Select Parent\" [disabled]=\"true\" required\r\n                    value=\"{{parentName}}\" autocomplete=\"off\" >\r\n                    <div >\r\n                        <button type=\"button\" (click)=\"openSubModelParent(contentParent)\" class=\"btn btn-primary btn-space\" [disabled]=\"isParent\"> Search </button>\r\n                   </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row mydiv  form-group\">\r\n                <div class=\"col-1\"></div>\r\n                <div class=\"col\">\r\n                    <div class=\"row\">\r\n                        <label for=\"stdt\">Start Date :</label>\r\n                            <input class=\"mydate\" min=\"{{ todayDate }}\" max=\"{{endDate}}\" type=\"date\" id=\"stdt\" name=\"startDate\" [(ngModel)]=\"startDate\" [disabled]=\"isParent\">  \r\n                        <label for=\"eddt\">End Date :</label>\r\n                            <input class=\"mydate\" min=\"{{ startDate }}\" type=\"date\" id=\"eddt\" name=\"endDate\" [(ngModel)]=\"endDate\" [disabled]=\"isParent\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row mydiv  form-group\">\r\n                <div class=\"col-1\">\r\n                  <label for=\"mgr\">User:</label>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input  class=\"col\" type=\"text\" placeholder=\"Select User\" [disabled]=\"true\" required\r\n                    value=\"{{userName}}\" autocomplete=\"off\" >\r\n              <div >\r\n                  <button type=\"button\" (click)=\"openSubModelUser(contentUser)\" class=\"btn btn-primary btn-space\" [disabled]=\"isParent\"> Search </button>\r\n              </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mydiv form-group\">\r\n              <div class=\"col-1\"></div>\r\n              <div class=\"col\">\r\n               <div class=\"row\">\r\n                   <button class=\"col-1 btn btn-primary\" type=\"submit\">{{submitbtn}}</button>\r\n                   <button class=\"col-1 btn btn-primary\" type=\"reset\" (click)=\"onReset()\">Reset</button>\r\n               </div>\r\n               </div>\r\n           </div>\r\n\r\n           </div>\r\n    </form>\r\n    \r\n    <ng-template #content let-modal>\r\n        <div class=\"double\">\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\" style=\"text-align: center\"> Select Project Name </h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <div class=\"form-group form-inline\">\r\n                <label class=\"modelLabel btn-space\"> Project </label>\r\n                <select class=\"form-control selectInput btn-space\" id=\"selectedProjectId\" name=\"selectedProjectId\" [(ngModel)]=\"selectedProjectId\">\r\n                  <option *ngFor=\"let project of projects\" value=\"{{project.projectId}}\">\r\n                    {{ project.projectName}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <button id=\"selectProject\" class=\"btn btn-primary btn-space\" (click)=\"selectProject()\">Select</button>\r\n              <button id=\"cancelButton\" class=\"btn btn-primary btn-space\" (click)=\"modal.dismiss()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n\r\n      <ng-template #contentParent let-modal>\r\n          <div class=\"double\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\" id=\"modal-basic-title\" style=\"text-align: center\"> Select Parent Task Name </h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group form-inline\">\r\n                  <label class=\"modelLabel btn-space\"> Parent </label>\r\n                  <select class=\"form-control selectInput btn-space\" id=\"selectedParentId\" name=\"selectedParentId\" [(ngModel)]=\"selectedParentId\">\r\n                    <option *ngFor=\"let parent of parents\" value=\"{{parent.parentId}}\">\r\n                      {{ parent.parentName}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <button id=\"selectParent\" class=\"btn btn-primary btn-space\" (click)=\"selectParent()\">Select</button>\r\n                <button id=\"cancelButton\" class=\"btn btn-primary btn-space\" (click)=\"modal.dismiss()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n      <ng-template #contentUser let-modal>\r\n          <div class=\"double\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\" id=\"modal-basic-title\" style=\"text-align: center\"> Select Manager for Project </h4>\r\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group form-inline\">\r\n                  <label class=\"modelLabel btn-space\"> Developer Name </label>\r\n                  <select class=\"form-control selectInput\" id=\"selectedUserId\" name=\"selectedUserId\" [(ngModel)]=\"selectedUserId\">\r\n                    <option *ngFor=\"let user of users\" value=\"{{user.userId}}\">\r\n                      {{ user.firstName }} , {{ user.lastName }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <button id=\"selectUser\" class=\"btn btn-primary btn-space\" (click)=\"selectUser()\">Select</button>\r\n                <button id=\"cancelButton\" class=\"btn btn-primary btn-space\" (click)=\"modal.dismiss()\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/viewTask.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/viewTask.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <title>Project Manager</title>\r\n    <style>\r\n        .btn{\r\n            height: 35px;\r\n            padding: 5px;\r\n        }\r\n        .row{\r\n            margin: 15px 15px;\r\n            padding: 7px;\r\n        }\r\n        label{\r\n            text-align: left;\r\n        }\r\n        .searchbar{\r\n            width:inherit\r\n        }\r\n        #btnCol{\r\n            height:35px;\r\n            width: 75px;\r\n            margin: 5px;\r\n            padding: 5px;\r\n        }\r\n        .list-group{\r\n            margin:0px;\r\n            padding: 1px;\r\n            border: none;\r\n            background: #dddddd;\r\n                    }\r\n        .list-group-item{\r\n            padding: 1px;\r\n            border: none;\r\n            background: #dddddd;\r\n        }\r\n        .dispPrjCol.col-3{\r\n            padding: 1px;\r\n            background: #dddddd;\r\n        }\r\n        .dispPrjCol.col-2{\r\n            padding: 1px;\r\n            background: #dddddd;\r\n        }\r\n        .dispPrjCol.col-1{\r\n            padding: 1px;\r\n            background: #dddddd;\r\n        }       \r\n            \r\n        .dispPrjRow{\r\n            margin:0px;\r\n        }\r\n        .horizBtn{\r\n            margin: 10px 0px;\r\n            padding: 2px;\r\n        }       \r\n        .align-items-center{\r\n            margin: 10px 0px;\r\n            padding: 10px;\r\n        }\r\n        .btn-space{\r\n           margin-right: 10px;\r\n        }\r\n        .btn{\r\n           width: 100px;\r\n           margin: 2px;\r\n        }\r\n    </style>\r\n  </head>\r\n  <body>\r\n\r\n   \r\n    <form class=\"srchSort\">\r\n       <div class=\"container\">\r\n            <div class=\"row\">\r\n               <label class=\"col-1\">Project: </label>\r\n\r\n               <input  class=\"col\" type=\"text\" placeholder=\"Select Project\" [disabled]=\"true\" required\r\n               value=\"{{projectName}}\" autocomplete=\"off\">\r\n               <div >\r\n                    <button type=\"button\" (click)=\"openSubModel(content)\" class=\"btn btn-primary btn-space\"> Search </button>\r\n               </div>\r\n\r\n               <label class=\"col-1\">Sort By:</label>\r\n               <div class=\"col-6\">\r\n                   <div class=\"col-2 btn btn-space btn-primary\" type=\"button\" (click)='sortByStartDate()'>Start Date</div>\r\n                   <div class=\"col-2 btn btn-space btn-primary\" type=\"button\" (click)='sortByEndDate()'>End Date</div>\r\n                   <div class=\"col-2 btn btn-space btn-primary\" type=\"button\" (click)='sortByPriority()'>Priority</div>\r\n                   <div class=\"col-2 btn btn-space btn-primary\" type=\"button\" (click)='sortByCompleted()'>Completed</div>\r\n               </div>\r\n            </div>\r\n       </div>\r\n    </form>    \r\n    \r\n    <form class=\"dispPrj\">\r\n        <div class=\"container\" *ngIf='tasksFiltered && tasksFiltered.length'>\r\n            <div class=\"row\" *ngFor = 'let task of tasksFiltered'>\r\n                <div class=\"dispPrjCol col-3\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"list-group-item\">Task : {{task.taskName}}</li>\r\n                      <li class=\"list-group-item\"></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"dispPrjCol col-3\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"list-group-item\">Parent  : {{task.parent.parentName}}</li>\r\n                      <li class=\"list-group-item\"></li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"dispPrjCol col-1\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"row dispPrjRow list-group-item\">Priority: {{task.priority}}</li>\r\n                    </ul>  \r\n                </div>\r\n                <div class=\"dispPrjCol col-2\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"row dispPrjRow list-group-item\">Start: {{task.startDate | date:'MM/dd/yyyy'}}</li>\r\n                    </ul>  \r\n                </div>\r\n                <div class=\"dispPrjCol col-2\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"row dispPrjRow list-group-item\">End: {{task.endDate | date:'MM/dd/yyyy'}}</li>\r\n                    </ul>  \r\n                </div>\r\n                <div class=\"col-1\">\r\n                    <button class=\"btn btn-primary\" (click)='editTask(task.taskId)' [disabled]=!task.taskStatus> Edit </button>\r\n                    <button class=\"btn btn-primary\" (click)='endTask(task)' [disabled]=!task.taskStatus> End Task </button>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </form>\r\n    \r\n    <ng-template #content let-modal>\r\n            <div class=\"double\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"modal-basic-title\" style=\"text-align: center\"> Select Project Name </h4>\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                  <div class=\"form-group form-inline\">\r\n                    <label class=\"modelLabel btn-space\"> Project </label>\r\n                    <select class=\"form-control selectInput btn-space\" id=\"selectedProjectId\" name=\"selectedProjectId\" [(ngModel)]=\"selectedProjectId\">\r\n                      <option *ngFor=\"let project of projects\" value=\"{{project.projectId}}\">\r\n                        {{ project.projectName}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <button id=\"selectProject\" class=\"btn btn-primary btn-space\" (click)=\"selectProject()\">Select</button>\r\n                  <button id=\"cancelButton\" class=\"btn btn-primary btn-space\" (click)=\"modal.dismiss()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/addUser.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/addUser.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <title></title>\r\n    <style>\r\n        .buttonHor{\r\n         margin: 10px 10px;            \r\n         padding: 10px;            \r\n            color: black;\r\n        }\r\n        .mydiv {\r\n            margin: 1px 1px;\r\n        }\r\n        .col-1{\r\n            margin: 1px 10px;\r\n            padding: 5px;\r\n        }\r\n        .nametext{\r\n            width:300px;\r\n        }\r\n    </style>\r\n  </head>\r\n  <body>\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"container \">\r\n            <div class=\"row form-group\" >\r\n                <div class=\"col-2\">    \r\n                    <label>First Name:</label>                     \r\n                </div>\r\n                <div class=\"col-4\">    \r\n                    <input type=\"text\" class=\"firstName\" name='firstName' [(ngModel)]=\"firstName\" ng-required=\"firstName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">                \r\n                <div class=\"col-2\">    \r\n                    <label >Last  Name:</label>                    \r\n                </div>\r\n                <div class=\"nametext col-4\">    \r\n                    <input type=\"text\" class=\"nametext\"   name='lastName' [(ngModel)]=\"lastName\" ng-required=\"firstName\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">                \r\n                <div class=\"col-2\">    \r\n                    <label>Employee ID:</label>\r\n                </div>\r\n                <div class=\"col-1\">    \r\n                    <input type=\"number\" name='empID' [(ngModel)]=\"employeeId\" required>                    \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"checkbox\">\r\n                    <label><input type=\"checkbox\" #manager=\"ngModel\" name=\"manager\" [(ngModel)]=\"mgrInd\" required> Manager? </label>\r\n            </div>\r\n          \r\n            <div class=\"row mydiv form-group\">\r\n               <div class=\"col-2\"></div>\r\n               <div class=\"col\">\r\n                <div class=\"row\">\r\n                   <button class=\"col-1 btn btn-primary\" type=\"submit\">{{submitbtn}}</button>\r\n                   <button class=\"col-1 btn btn-primary\" type=\"reset\" (click)=\"onReset()\">Reset</button>\r\n                </div>\r\n                </div>\r\n            </div>\r\n           </div>\r\n        \r\n    </form>\r\n    <div>\r\n        <view-users (notify)='onNotify($event)'>\r\n\r\n        </view-users>\r\n    </div>\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/viewUsers.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/viewUsers.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <title>Project Manager</title>\r\n    <style>\r\n        .btn{\r\n            height: 35px;\r\n            padding: 5px;\r\n        }\r\n        .row{\r\n            margin: 15px 15px;\r\n            padding: 7px;\r\n        }\r\n        label{\r\n            text-align: left;\r\n        }\r\n        .searchbar{\r\n            width:inherit\r\n        }\r\n        #btnCol{\r\n            height:35px;\r\n            width: 75px;\r\n            margin: 5px;\r\n            padding: 5px;\r\n        }\r\n        .list-group{\r\n            margin:0px;\r\n            padding: 1px;\r\n            border: none;\r\n            background: #dddddd;\r\n                    }\r\n        .list-group-item{\r\n            padding: 1px;\r\n            border: none;\r\n            background: #dddddd;\r\n        }\r\n        .dispPrjCol.col-10{\r\n            padding: 0px;\r\n            background: #dddddd;\r\n        }\r\n        .dispPrjCol.col-2{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content:center;\r\n        }\r\n        .dispPrjRow{\r\n            margin:0px;\r\n        }\r\n        .horizBtn{\r\n            margin: 10px 0px;\r\n            padding: 2px;\r\n        }       \r\n        .align-items-center{\r\n            margin: 10px 0px;\r\n            padding: 10px;\r\n        }\r\n        .btn-space{\r\n           margin-right: 5px\r\n        }\r\n        .btn-sm{\r\n            width: 150px;\r\n        }\r\n    </style>\r\n  </head>\r\n  <body>\r\n\r\n   \r\n    <form class=\"srchSort\">\r\n       <div class=\"container\">\r\n            <div class=\"row\">\r\n               <input class=\"col-5 searchbar\" type=\"text\" [(ngModel)]='searchFirstName' name=\"first name\">\r\n               <label class=\"col-1\">Sort By:</label>\r\n               <div class=\"col-6\">\r\n                   <button class=\"col-4 btn btn-space btn-secondary btn-sm\" type=\"button\" (click)='sortByFirstName()'>First Name</button>\r\n                   <button class=\"col-4 btn btn-space btn-secondary btn-sm\" type=\"button\" (click)='sortByLastName()'>Last Name</button>\r\n                   <button class=\"col-4 btn btn-space btn-secondary btn-sm\" type=\"button\" (click)='sortByEmployeeId()'>ID</button>\r\n               </div>\r\n            </div>\r\n       </div>\r\n    </form>    \r\n    \r\n    <form class=\"dispPrj\">\r\n        <div class=\"container\"  *ngIf='usersFiltered && usersFiltered.length'>\r\n            <div class=\"row\" *ngFor='let user of usersFiltered'>\r\n                <div class=\"dispPrjCol col-10\">\r\n                    <ul class=\"list-group\">\r\n                      <li class=\"list-group-item\">First Name  : {{user.firstName}}</li>\r\n                      <li class=\"list-group-item\">Second Name : {{user.lastName}}</li>\r\n                      <li class=\"list-group-item\">Employee ID : {{user.employeeId}}</li>\r\n                    </ul>\r\n                </div>\r\n                \r\n                <div class=\"dispPrjCol col-2\">\r\n                    <div id=\"btnCol\" class=\"btn btn-primary\" type=\"button\" (click)=\"onClick(user)\">Edit</div>\r\n                    <div id=\"btnCol\" class=\"btn btn-primary\" type=\"button\" (click)='deleteUser(user.userId)'>Delete</div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </form>\r\n    \r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ProjectManager';
        this.onClick = '';
    }
    disViewTasks() {
        this.onClick = 'viewTasks';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tasks_viewTask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/viewTask.component */ "./src/app/tasks/viewTask.component.ts");
/* harmony import */ var _users_viewUsers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/viewUsers.component */ "./src/app/users/viewUsers.component.ts");
/* harmony import */ var _users_addUser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users/addUser.component */ "./src/app/users/addUser.component.ts");
/* harmony import */ var _projects_addProject_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/addProject.component */ "./src/app/projects/addProject.component.ts");
/* harmony import */ var _projects_viewProjects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects/viewProjects.component */ "./src/app/projects/viewProjects.component.ts");
/* harmony import */ var _tasks_addTask_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks/addTask.component */ "./src/app/tasks/addTask.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pageNotFound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pageNotFound.component */ "./src/app/pageNotFound.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _tasks_viewTask_component__WEBPACK_IMPORTED_MODULE_6__["ViewTaskComponent"], _users_viewUsers_component__WEBPACK_IMPORTED_MODULE_7__["ViewUsersComponent"], _users_addUser_component__WEBPACK_IMPORTED_MODULE_8__["addUserComponent"], _projects_addProject_component__WEBPACK_IMPORTED_MODULE_9__["addProjectComponent"], _projects_viewProjects_component__WEBPACK_IMPORTED_MODULE_10__["viewProjectsComponent"], _tasks_addTask_component__WEBPACK_IMPORTED_MODULE_11__["addTaskComponent"], _pageNotFound_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot([
                { path: 'addproject', component: _projects_addProject_component__WEBPACK_IMPORTED_MODULE_9__["addProjectComponent"] },
                { path: 'addtask/:taskId', component: _tasks_addTask_component__WEBPACK_IMPORTED_MODULE_11__["addTaskComponent"] },
                { path: 'adduser', component: _users_addUser_component__WEBPACK_IMPORTED_MODULE_8__["addUserComponent"] },
                { path: 'viewtask', component: _tasks_viewTask_component__WEBPACK_IMPORTED_MODULE_6__["ViewTaskComponent"] },
                { path: '', redirectTo: 'viewtask', pathMatch: 'full' },
                { path: '**', component: _pageNotFound_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
            ], { onSameUrlNavigation: 'reload' }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pageNotFound.component.ts":
/*!*******************************************!*\
  !*** ./src/app/pageNotFound.component.ts ***!
  \*******************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<html><body>Page Not Found</body></html>`
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/projects/addProject.component.ts":
/*!**************************************************!*\
  !*** ./src/app/projects/addProject.component.ts ***!
  \**************************************************/
/*! exports provided: addProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectComponent", function() { return addProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _users_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/user */ "./src/app/users/user.ts");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users/user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








let addProjectComponent = class addProjectComponent {
    constructor(projectService, router, datePipe, userService, modalService) {
        this.projectService = projectService;
        this.router = router;
        this.datePipe = datePipe;
        this.userService = userService;
        this.modalService = modalService;
        this.managers = [];
        this.manager = new _users_user__WEBPACK_IMPORTED_MODULE_5__["IUser"]();
        this.user = new _users_user__WEBPACK_IMPORTED_MODULE_5__["IUser"]();
        this.priority = 0;
        this.projectStatus = true;
        this.submitbtn = "Add";
        this.errorMessage = '';
        this.setDate = false;
        this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    }
    onReset() {
        this.submitbtn = "Add";
        this.projectName = "";
        this.priority = 0;
        this.projectStatus = true;
        this.projectId = 0;
        this.manager = null;
        this.managerName = "";
        this.startDate = "";
        this.endDate = "";
    }
    ngOnInit() {
        this.userService.getManagers().subscribe(managers => this.managers = managers);
    }
    isDateSet(event) {
        this.setDate = !!event.target.checked;
    }
    onNotify(projectAdded) {
        console.log(projectAdded);
        this.projectName = projectAdded.projectName;
        this.priority = projectAdded.priority;
        this.projectStatus = projectAdded.projectStatus;
        this.projectId = projectAdded.projectId;
        this.manager = projectAdded.user;
        this.managerName = this.manager.employeeId + ' - ' + this.manager.firstName + ' , ' + this.manager.lastName;
        this.startDate = this.datePipe.transform(projectAdded.startDate, 'yyyy-MM-dd');
        this.endDate = this.datePipe.transform(projectAdded.endDate, 'yyyy-MM-dd');
        this.submitbtn = "Update";
    }
    onSubmit() {
        this.startDate += 'T04:00:00.000+0000';
        this.endDate += 'T04:00:00.000+0000';
        var data = {
            "projectName": this.projectName,
            "startDate": this.startDate,
            "endDate": this.endDate,
            "priority": this.priority,
            "projectId": this.projectId,
            "projectStatus": this.projectStatus,
            "user": this.manager,
            "taskCount": 0
        };
        console.log("data before insert project:" + data);
        this.projectService.addProject(data).subscribe(save => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/addproject']));
        });
    }
    openSubModel(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
        }
        else {
            this.manager = this.managers.filter(user => user.userId == this.selectedManagerId)[0];
            this.errorMessage = undefined;
        }
        this.managerName = this.manager.employeeId + ' - ' + this.manager.firstName + ' , ' + this.manager.lastName;
        this.modalService.dismissAll();
    }
};
addProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-project',
        template: __webpack_require__(/*! raw-loader!./addProject.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/addProject.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _users_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])
], addProjectComponent);



/***/ }),

/***/ "./src/app/projects/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let ProjectService = class ProjectService {
    constructor(http) {
        this.http = http;
        this.serviceURL = 'http://localhost:8081/api/v1';
    }
    getProjects() {
        return this.http.get(`${this.serviceURL}/getProjects`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    delProject(project_id) {
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.delete(`${this.serviceURL}/deleteProject/${project_id}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    addProject(project) {
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.post(`${this.serviceURL}/addProject`, project, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ProjectService);



/***/ }),

/***/ "./src/app/projects/viewProjects.component.ts":
/*!****************************************************!*\
  !*** ./src/app/projects/viewProjects.component.ts ***!
  \****************************************************/
/*! exports provided: viewProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewProjectsComponent", function() { return viewProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let viewProjectsComponent = class viewProjectsComponent {
    constructor(projectService, userService, router) {
        this.projectService = projectService;
        this.userService = userService;
        this.router = router;
        this._searchProject = '';
        this.errorMessage = '';
        this.sorted = false;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.projects = [];
        this.deleteProjectFiltered = (projectId) => {
            this.projectsFiltered = this.projectsFiltered.filter(project => project.projectId !== projectId);
        };
        this.searchProject = '';
    }
    onClick(project) {
        this.notify.emit(project);
    }
    get searchProject() {
        return this._searchProject;
    }
    set searchProject(value) {
        this._searchProject = value;
        this.projectsFiltered = this.searchProject ? this.performFilter(this.searchProject) : this.projects;
    }
    performFilter(searchProject) {
        searchProject = searchProject.toLocaleLowerCase();
        return this.projects.filter((project) => project.projectName.toLocaleLowerCase().indexOf(searchProject) !== -1);
    }
    ngOnInit() {
        this.projectService.getProjects().subscribe(projects => {
            this.projects = projects;
            this.projectsFiltered = this.projects;
        }, error => this.errorMessage = error);
        console.log(this.projectsFiltered);
    }
    editproject(project) {
        this.projectToBeUpdate = project;
        console.log(this.projectToBeUpdate);
    }
    //deleteProject1 (projectId: number): void{
    //    this.projectService.delProject(projectId).subscribe(
    //()=>{console.log('delete successfully'),
    //this.deleteProjectFiltered(projectId)
    //},
    //(err) => console.log(err)
    //);
    //}
    deleteProject(project) {
        project.projectStatus = false;
        this.projectService.addProject(project).subscribe(save => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/addproject']));
        });
    }
    sortByCompleted() {
        if (this.sorted)
            this.projectsFiltered.sort((a, b) => { return new Boolean(a.projectStatus) - new Boolean(b.projectStatus); });
        else
            this.projectsFiltered.sort((a, b) => { return new Boolean(b.projectStatus) - new Boolean(a.projectStatus); });
        this.sorted = !this.sorted;
    }
    sortByPriority() {
        if (this.sorted)
            this.projectsFiltered.sort((a, b) => a.priority - b.priority);
        else
            this.projectsFiltered.sort((a, b) => b.priority - a.priority);
        this.sorted = !this.sorted;
    }
    sortByStartDate() {
        if (this.sorted)
            this.projectsFiltered.sort((a, b) => { return new Date(a.startDate) - new Date(b.startDate); });
        else
            this.projectsFiltered.sort((a, b) => { return new Date(b.startDate) - new Date(a.startDate); });
        this.sorted = !this.sorted;
    }
    sortByEndDate() {
        if (this.sorted)
            this.projectsFiltered.sort((a, b) => { return new Date(a.endDate) - new Date(b.endDate); });
        else
            this.projectsFiltered.sort((a, b) => { return new Date(b.endDate) - new Date(a.endDate); });
        this.sorted = !this.sorted;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], viewProjectsComponent.prototype, "notify", void 0);
viewProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'view-projects',
        template: __webpack_require__(/*! raw-loader!./viewProjects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/viewProjects.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _users_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], viewProjectsComponent);



/***/ }),

/***/ "./src/app/tasks/addTask.component.ts":
/*!********************************************!*\
  !*** ./src/app/tasks/addTask.component.ts ***!
  \********************************************/
/*! exports provided: addTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaskComponent", function() { return addTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _projects_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects/project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _users_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _parent_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parent.service */ "./src/app/tasks/parent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");









let addTaskComponent = class addTaskComponent {
    constructor(route, cd, taskService, router, userService, projectService, parentService, modalService, datePipe) {
        this.route = route;
        this.cd = cd;
        this.taskService = taskService;
        this.router = router;
        this.userService = userService;
        this.projectService = projectService;
        this.parentService = parentService;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.taskId = 0;
        this.isParent = false;
        this.taskStatus = true;
        this.priority = 0;
        // end of screen variables declaration
        this.submitbtn = "Add Task";
        this.users = [];
        this.projects = [];
        this.parents = [];
        this.tasks = [];
    }
    onReset() {
        this.submitbtn = "Add";
        this.project = null;
        this.taskName = '';
        this.isParent = false;
        this.priority = 0;
        this.parent = null;
        this.startDate = "";
        this.endDate = "";
        this.user = null;
    }
    ngOnInit() {
        const taskId = this.route.snapshot.paramMap.get('taskId');
        if (!(taskId == null) && !(taskId == '0')) {
            this.taskService.getTasks().subscribe(tasks => {
                this.task = tasks.filter(task => task.taskId.toLocaleString() == taskId)[0];
                this.submitbtn = "Update";
                this.project = this.task.project;
                this.taskId = this.task.taskId;
                this.taskName = this.task.taskName;
                this.isParent = false;
                this.priority = this.task.priority;
                this.parent = this.task.parent;
                this.startDate = this.datePipe.transform(this.task.startDate, 'yyyy-MM-dd');
                this.endDate = this.datePipe.transform(this.task.endDate, 'yyyy-MM-dd');
                this.datePipe.transform(this.endDate, 'yyyy-MM-dd');
                this.user = this.task.user;
                this.projectName = this.task.project.projectName;
                this.parentName = this.task.parent.parentName;
                this.userName = this.task.user.firstName + ' , ' + this.task.user.lastName;
            }, error => this.errorMessage = error);
        }
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
        this.parentService.getParents().subscribe(parents => this.parents = parents);
        this.userService.getUsers().subscribe(users => this.users = users);
    }
    openSubModel(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
            if (this.projects.filter(project => project.projectId == this.project.projectId).length === 0) {
                this.selectedProjectId = 0;
                this.projectName = '';
                this.project = null;
            }
        });
    }
    selectProject() {
        if (!this.selectedProjectId) {
            if (this.projects.filter(project => project.projectId == this.project.projectId).length === 0) {
                this.selectedProjectId = 0;
                this.projectName = '';
                this.project = null;
            }
        }
        else {
            this.project = this.projects.filter(project => project.projectId == this.selectedProjectId)[0];
            this.projectName = this.project.projectName;
            this.errorMessage = undefined;
        }
        this.modalService.dismissAll();
    }
    openSubModelParent(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
            if (this.parents.filter(parent => parent.parentId == this.parent.parentId).length === 0) {
                this.selectedParentId = 0;
                this.parentName = '';
                this.parent = null;
            }
        });
    }
    selectParent() {
        if (!this.selectedParentId) {
            if (this.parents.filter(parent => parent.parentId == this.parent.parentId).length === 0) {
                this.selectedParentId = 0;
                this.parentName = '';
                this.parent = null;
            }
        }
        else {
            this.parent = this.parents.filter(parent => parent.parentId == this.selectedParentId)[0];
            this.parentName = this.parent.parentName;
            this.errorMessage = undefined;
        }
        this.modalService.dismissAll();
    }
    selectUser() {
        if (!this.selectedUserId) {
            if (this.users.filter(user => user.userId == this.user.userId).length === 0) {
                this.selectedUserId = 0;
                this.userName = '';
                this.user = null;
            }
        }
        else {
            this.user = this.users.filter(user => user.userId == this.selectedUserId)[0];
            this.userName = this.user.firstName + ' , ' + this.user.lastName;
            this.errorMessage = undefined;
        }
        this.modalService.dismissAll();
    }
    openSubModelUser(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
            if (this.users.filter(user => user.userId == this.user.userId).length === 0) {
                this.selectedUserId = 0;
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
    onSubmit() {
        //console.log('inside onsubmit'+this.isParent);
        if (this.isParent) {
            var data = {
                "parentId": 0,
                "parentName": this.taskName
            };
            this.parentService.addParent(data).subscribe(save => {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/addtask/0']));
            });
        }
        else {
            this.startDate += 'T04:00:00.000+0000';
            this.endDate += 'T04:00:00.000+0000';
            var dataTask = {
                "taskId": this.taskId,
                "taskName": this.taskName,
                "priority": this.priority,
                "startDate": this.startDate,
                "endDate": this.endDate,
                "taskStatus": this.taskStatus,
                "user": this.user,
                "parent": this.parent,
                "project": this.project
            };
            this.taskService.addTask(dataTask).subscribe(save => {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/addtask/0']));
            });
        }
    }
};
addTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-task',
        template: __webpack_require__(/*! raw-loader!./addTask.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/addTask.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _users_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _projects_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
        _parent_service__WEBPACK_IMPORTED_MODULE_6__["ParentService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]])
], addTaskComponent);



/***/ }),

/***/ "./src/app/tasks/parent.service.ts":
/*!*****************************************!*\
  !*** ./src/app/tasks/parent.service.ts ***!
  \*****************************************/
/*! exports provided: ParentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentService", function() { return ParentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let ParentService = class ParentService {
    constructor(http) {
        this.http = http;
        this.serviceURL = 'http://localhost:8081/api/v1';
    }
    getParents() {
        return this.http.get(`${this.serviceURL}/getParents`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    addParent(parent) {
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.post(`${this.serviceURL}/addParent`, parent, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
ParentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ParentService);



/***/ }),

/***/ "./src/app/tasks/task.service.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/task.service.ts ***!
  \***************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.serviceURL = 'http://localhost:8081/api/v1';
    }
    getTasks() {
        return this.http.get(`${this.serviceURL}/getTasks`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    addTask(task) {
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.post(`${this.serviceURL}/addTask`, task, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], TaskService);



/***/ }),

/***/ "./src/app/tasks/viewTask.component.ts":
/*!*********************************************!*\
  !*** ./src/app/tasks/viewTask.component.ts ***!
  \*********************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _projects_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../projects/project.service */ "./src/app/projects/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ViewTaskComponent = class ViewTaskComponent {
    constructor(taskService, projectService, modalService, router) {
        this.taskService = taskService;
        this.projectService = projectService;
        this.modalService = modalService;
        this.router = router;
        this.tasksFiltered = [];
        this.sorted = false;
        this.projects = [];
        this.tasks = [];
    }
    ngOnInit() {
        this.taskService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
            this.tasksFiltered = this.tasks;
        }, error => this.errorMessage = error);
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }
    editproject(task) {
        this.taskToBeUpdate = task;
    }
    openSubModel(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
            if (this.projects.filter(project => project.projectId == this.project.projectId).length === 0) {
                this.selectedProjectId = 0;
                this.projectName = '';
                this.project = null;
            }
        });
    }
    selectProject() {
        if (!this.selectedProjectId) {
            if (this.projects.filter(project => project.projectId == this.project.projectId).length === 0) {
                this.selectedProjectId = 0;
                this.projectName = '';
                this.project = null;
            }
        }
        else {
            this.project = this.projects.filter(project => project.projectId == this.selectedProjectId)[0];
            this.projectName = this.project.projectName;
            this.tasksFiltered = this.tasks.filter((task) => task.project.projectId == this.selectedProjectId);
            this.errorMessage = undefined;
        }
        this.modalService.dismissAll();
    }
    editTask(taskId) {
        //console.log("task : " + taskId);
        this.router.navigate(['/addtask', taskId]);
    }
    endTask(task) {
        task.taskStatus = false;
        this.taskService.addTask(task).subscribe(save => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/viewtask']));
        });
    }
    sortByCompleted() {
        if (this.sorted)
            this.tasksFiltered.sort((a, b) => { return new Boolean(a.taskStatus) - new Boolean(b.taskStatus); });
        else
            this.tasksFiltered.sort((a, b) => { return new Boolean(b.taskStatus) - new Boolean(a.taskStatus); });
        this.sorted = !this.sorted;
    }
    sortByPriority() {
        if (this.sorted)
            this.tasksFiltered.sort((a, b) => a.priority - b.priority);
        else
            this.tasksFiltered.sort((a, b) => b.priority - a.priority);
        this.sorted = !this.sorted;
    }
    sortByStartDate() {
        if (this.sorted)
            this.tasksFiltered.sort((a, b) => { return new Date(a.startDate) - new Date(b.startDate); });
        else
            this.tasksFiltered.sort((a, b) => { return new Date(b.startDate) - new Date(a.startDate); });
        this.sorted = !this.sorted;
    }
    sortByEndDate() {
        if (this.sorted)
            this.tasksFiltered.sort((a, b) => { return new Date(a.endDate) - new Date(b.endDate); });
        else
            this.tasksFiltered.sort((a, b) => { return new Date(b.endDate) - new Date(a.endDate); });
        this.sorted = !this.sorted;
    }
};
ViewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'view-task',
        template: __webpack_require__(/*! raw-loader!./viewTask.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/viewTask.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"], _projects_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ViewTaskComponent);



/***/ }),

/***/ "./src/app/users/addUser.component.ts":
/*!********************************************!*\
  !*** ./src/app/users/addUser.component.ts ***!
  \********************************************/
/*! exports provided: addUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUserComponent", function() { return addUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/users/user.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/users/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let addUserComponent = class addUserComponent {
    constructor(userService, router, cd) {
        this.userService = userService;
        this.router = router;
        this.cd = cd;
        this.userId = 0;
        this.mgrInd = false;
        this.submitbtn = "Add";
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["IUser"]();
    }
    onReset() {
        this.firstName = "";
        this.lastName = "";
        this.employeeId = null;
        this.userId = 0;
        this.mgrInd = false;
        this.submitbtn = "Add";
    }
    onNotify(userAdded) {
        console.log('inside add component');
        console.log(userAdded);
        this.firstName = userAdded.firstName;
        this.lastName = userAdded.lastName;
        this.employeeId = userAdded.employeeId;
        this.userId = userAdded.userId;
        this.mgrInd = userAdded.mgrInd;
        this.submitbtn = "Update";
    }
    onSubmit() {
        var data = {
            "firstName": this.firstName,
            "lastName": this.lastName,
            "employeeId": this.employeeId,
            "userId": this.userId,
            "mgrInd": this.mgrInd
        };
        console.log(data);
        this.userService.addUser(data).subscribe(save => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['/adduser']));
        });
    }
};
addUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'add-user',
        template: __webpack_require__(/*! raw-loader!./addUser.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/addUser.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], addUserComponent);



/***/ }),

/***/ "./src/app/users/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/users/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.serviceURL = 'http://localhost:8081/api/v1';
    }
    getUsers() {
        return this.http.get(`${this.serviceURL}/getUsers`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getManagers() {
        return this.http.get(`${this.serviceURL}/getManagers`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('Managers: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    delUser(id) {
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.delete(`${this.serviceURL}/deleteUser/${id}`, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    addUser(user) {
        httpOptions.headers.append('Access-Control-Allow-Origin', '*');
        httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        httpOptions.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.post(`${this.serviceURL}/addUser`, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => console.log('All: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/users/user.ts":
/*!*******************************!*\
  !*** ./src/app/users/user.ts ***!
  \*******************************/
/*! exports provided: IUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IUser", function() { return IUser; });
class IUser {
}


/***/ }),

/***/ "./src/app/users/viewUsers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/users/viewUsers.component.ts ***!
  \**********************************************/
/*! exports provided: ViewUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewUsersComponent", function() { return ViewUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/users/user.service.ts");




let ViewUsersComponent = class ViewUsersComponent {
    constructor(userService) {
        this.userService = userService;
        this._searchFirstName = '';
        this.errorMessage = '';
        this.sorted = false;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.users = [];
        this.deleteUserFiltered = (id) => {
            this.usersFiltered = this.usersFiltered.filter(user => user.userId !== id);
        };
        this.searchFirstName = 'search firstname';
    }
    onClick(user) {
        this.notify.emit(user);
    }
    get searchFirstName() {
        return this._searchFirstName;
    }
    set searchFirstName(value) {
        this._searchFirstName = value;
        this.usersFiltered = this.searchFirstName ? this.performFilter(this.searchFirstName) : this.users;
    }
    performFilter(searchFirstName) {
        searchFirstName = searchFirstName.toLocaleLowerCase();
        return this.users.filter((user) => user.firstName.toLocaleLowerCase().indexOf(searchFirstName) !== -1);
    }
    ngOnInit() {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            this.usersFiltered = this.users;
        }, error => this.errorMessage = error);
    }
    editUser(user) {
        this.userToBeUpdate = user;
        console.log(this.userToBeUpdate);
    }
    deleteUser(id) {
        this.userService.delUser(id).subscribe(() => {
            console.log('delete successfully'),
                this.deleteUserFiltered(id);
        }, (err) => console.log(err));
    }
    sortByFirstName() {
        if (this.sorted)
            this.usersFiltered.sort((a, b) => a.firstName.localeCompare(b.firstName));
        else
            this.usersFiltered.sort((a, b) => b.firstName.localeCompare(a.firstName));
        this.sorted = !this.sorted;
    }
    sortByLastName() {
        if (this.sorted)
            this.usersFiltered.sort((a, b) => a.lastName.localeCompare(b.lastName));
        else
            this.usersFiltered.sort((a, b) => b.lastName.localeCompare(a.lastName));
        this.sorted = !this.sorted;
    }
    sortByEmployeeId() {
        if (this.sorted)
            this.usersFiltered.sort((a, b) => a.employeeId - b.employeeId);
        else
            this.usersFiltered.sort((a, b) => b.employeeId - a.employeeId);
        this.sorted = !this.sorted;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ViewUsersComponent.prototype, "notify", void 0);
ViewUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'view-users',
        template: __webpack_require__(/*! raw-loader!./viewUsers.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/viewUsers.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], ViewUsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\n0241133\Desktop\fse\Angular\Angular-GettingStarted-master\Angular-GettingStarted-master\ProjectManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map