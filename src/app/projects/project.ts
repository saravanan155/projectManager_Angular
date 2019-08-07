import { IUser } from '../users/user';

export interface IProject {
    projectId: number,
    projectName :string,
    startDate : string,
    endDate : string,
    priority:number,
    projectStatus : boolean,
    user: IUser
    taskCount: number;
}
