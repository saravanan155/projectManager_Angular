import { IUser } from '../users/user';
import { IProject } from '../projects/project';
import { IParent } from './parent';

export interface ITask{
    taskId: number;
    taskName : string;
    priority: number;
    startDate: string;
    endDate:string;
    taskStatus:boolean;
    user: IUser;
    parent: IParent;
    project: IProject;
}
