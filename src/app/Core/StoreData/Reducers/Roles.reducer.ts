import * as Models  from '../../Models/Common/DropdownValues.model';
import * as All from '../Actions/index';

export type AllActions = All.AllRoleActionsClasses;

const DefaultValue : Models.DropdownValues[] = [];

export function RoleReducerFunction(state = DefaultValue, action: AllActions)
{
    switch(action.type)
    {
        case All.RoleActionTypes.AddEnum:
            return [...state, action.payload]

        case All.RoleActionTypes.UpdateEnum:
        {
            state.map((todo, i) => {
            if (todo.Value == action.payload.Value){
                state[i] = action.payload;
            }
            });

            return state;
        }

        case All.RoleActionTypes.AddListEnum:
        {
            state =[];
                state.push.apply(state, action.payload);
                return state;
        }

        case All.RoleActionTypes.DeleteEnum:
            let product = action.payload
            return state.filter((el) => el.Value != product.Value);

        case All.RoleActionTypes.ResetEnum:
        {
            state=[];
            return state;
        }

        default:
            return state;
    }
}