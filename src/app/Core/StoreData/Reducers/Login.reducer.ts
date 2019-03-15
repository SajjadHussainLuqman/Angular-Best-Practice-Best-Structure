import * as Models  from '../../Models/Auth/Login.model';
import * as All from '../Actions/Login.actions';

export type AllActions = All.AllLoginActionsClasses;

const DefaultValue : Models.Login[] = [];

export function LoginReducerFunction(state = DefaultValue, action: AllActions)
{
    switch(action.type)
    {
        case All.LoginActionTypes.AddEnum:
            return [...state, action.payload]

        case All.LoginActionTypes.UpdateEnum:
        {
            state.map((todo, i) => {
            if (todo.Id == action.payload.Id){
                state[i] = action.payload;
            }
            });

            return state;
        }

        case All.LoginActionTypes.AddListEnum:
        {
                state.push.apply(state, action.payload);
                return state;
        }

        case All.LoginActionTypes.DeleteEnum:
            let product = action.payload
            return state.filter((el) => el.Id != product.Id);

        case All.LoginActionTypes.ResetEnum:
        {
            state=[];
            return state;
        }

        default:
            return state;
    }
}