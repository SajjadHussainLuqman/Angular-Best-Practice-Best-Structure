import { Action } from "@ngrx/store";

export enum RoleActionTypes
{
    AddEnum    = "[Role] AddEnum",
    UpdateEnum = "[Role] UpdateEnum",
    AddListEnum = "[Role] AddList",
    DeleteEnum = "[Role] DeleteEnum",
    ResetEnum  = "[Role] ResetEnum",
}

export class RoleAddActionClass implements Action
{
    readonly type = RoleActionTypes.AddEnum;
    constructor(public payload: any){}
}

export class RoleUpdateActionClass implements Action
{
    readonly type = RoleActionTypes.UpdateEnum;
    constructor(public payload: any){}
}

export class RoleAddListActionClass implements Action
{
    readonly type = RoleActionTypes.AddListEnum;
    constructor(public payload: any[]){}
}

export class RoleDeleteActionClass implements Action
{
    readonly type = RoleActionTypes.DeleteEnum;
    constructor(public payload: any){}
}

export class RoleResetActionClass implements Action
{
    readonly type = RoleActionTypes.ResetEnum;
}

export type AllRoleActionsClasses = RoleAddActionClass | RoleDeleteActionClass | RoleResetActionClass | RoleAddListActionClass | RoleUpdateActionClass;