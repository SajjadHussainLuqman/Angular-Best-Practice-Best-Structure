import * as Models  from '../../Models/Common/DropdownValues.model';
import * as All from '../Actions/index';

export type AllActions = All.AllUniversityActionsClasses;

const DefaultValue : Models.DropdownValues[] = [];

export function UniversityReducerFunction(state = DefaultValue, action: AllActions)
{
    switch(action.type)
    {
        case All.UniversityActionTypes.AddEnum:
            return [...state, action.payload]

        case All.UniversityActionTypes.UpdateEnum:
        {
            state.map((todo, i) => {
            if (todo.Value == action.payload.Value){
                state[i] = action.payload;
            }
            });

            return state;
        }

        case All.UniversityActionTypes.AddListEnum:
        {
            state =[];
                state.push.apply(state, action.payload);
                return state;
        }

        case All.UniversityActionTypes.DeleteEnum:
            let product = action.payload
            return state.filter((el) => el.Value != product.Value);

        case All.UniversityActionTypes.ResetEnum:
        {
            state=[];
            return state;
        }

        default:
            return state;
    }
}