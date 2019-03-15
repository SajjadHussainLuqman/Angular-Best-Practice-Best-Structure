import { Action } from "@ngrx/store";

export enum LoginActionTypes
{
    AddEnum    = "[Login] AddEnum",
    UpdateEnum = "[Login] UpdateEnum",
    AddListEnum = "[Login] AddList",
    DeleteEnum = "[Login] DeleteEnum",
    ResetEnum  = "[Login] ResetEnum",
}

export class LoginAddActionClass implements Action
{
    readonly type = LoginActionTypes.AddEnum;
    constructor(public payload: any){}
}

export class LoginUpdateActionClass implements Action
{
    readonly type = LoginActionTypes.UpdateEnum;
    constructor(public payload: any){}
}

export class LoginAddListActionClass implements Action
{
    readonly type = LoginActionTypes.AddListEnum;
    constructor(public payload: any[]){}
}

export class LoginDeleteActionClass implements Action
{
    readonly type = LoginActionTypes.DeleteEnum;
    constructor(public payload: any){}
}

export class LoginResetActionClass implements Action
{
    readonly type = LoginActionTypes.ResetEnum;
}

export type AllLoginActionsClasses = LoginAddActionClass | LoginDeleteActionClass | LoginResetActionClass | LoginAddListActionClass | LoginUpdateActionClass;