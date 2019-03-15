import { Action } from "@ngrx/store";

export enum UniversityActionTypes
{
    AddEnum    = "[University] AddEnum",
    UpdateEnum = "[University] UpdateEnum",
    AddListEnum = "[University] AddList",
    DeleteEnum = "[University] DeleteEnum",
    ResetEnum  = "[University] ResetEnum",
}

export class UniversityAddActionClass implements Action
{
    readonly type = UniversityActionTypes.AddEnum;
    constructor(public payload: any){}
}

export class UniversityUpdateActionClass implements Action
{
    readonly type = UniversityActionTypes.UpdateEnum;
    constructor(public payload: any){}
}

export class UniversityAddListActionClass implements Action
{
    readonly type = UniversityActionTypes.AddListEnum;
    constructor(public payload: any[]){}
}

export class UniversityDeleteActionClass implements Action
{
    readonly type = UniversityActionTypes.DeleteEnum;
    constructor(public payload: any){}
}

export class UniversityResetActionClass implements Action
{
    readonly type = UniversityActionTypes.ResetEnum;
}

export type AllUniversityActionsClasses = UniversityAddActionClass | UniversityDeleteActionClass | UniversityResetActionClass | UniversityAddListActionClass | UniversityUpdateActionClass;